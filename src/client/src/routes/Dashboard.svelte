<script lang="ts">
    import { fade } from 'svelte/transition';
    import DashboardBox from "../components/Campaign/DashboardBox.svelte";
    import { campaignNewActive, campaignDetailActive, selectedCampaign, user } from "../stores";
    import CampaignChoice from '../components/Campaign/CampaignChoice.svelte';
    import DashboardHeader from '../components/Campaign/DashboardHeader.svelte';
    import { onMount } from 'svelte';
    import { querystring, replace } from 'svelte-spa-router';
    import axios from 'axios';
    import Dialog from '@smui/dialog';
    import SimpleButton from '../components/SimpleButton.svelte';
    import SimpleTextfield from '../components/SimpleTextfield.svelte';
    import SimpleProgressCircle from '../components/SimpleProgressCircle.svelte';
    import Campaigns from '../components/Campaign/Campaigns.svelte';
    import CampaignDetail from '../components/Campaign/CampaignDetail.svelte';
    import { BG_WAVES } from '../enum/Themes';
    import InPlaceEdit from '../components/InPlaceEdit.svelte';

    campaignDetailActive.set(false);
    campaignNewActive.set(false);

    let joinDialogOpen = false;
    let joinInProgress = false;
    let inviteCode = undefined;
    let inviteInfo = undefined;
    let invitePassword = '';
    

    onMount (async () => {
        const searchParams = new URLSearchParams($querystring);
		inviteCode = searchParams.get('invite');
        if (inviteCode) {
            try {
                const response = await axios.get(`api/invite-info/${inviteCode}`);
                inviteInfo = response.data;
                joinDialogOpen = true;
            }
            catch (err) {
                
            }
        }
    });

    const joinCampaign = async (inviteCode: string, password = '') => {
        joinInProgress = true;
        if (! inviteCode) {
            return;
        }
        try {
            const response = await axios.post('/api/join-campaign', {
                inviteCode: inviteCode,
                password: password
            });

            const newCampaign = response.data.campaigns[0];

            // "live-reloading" to see the newly added campaign instantly without the need to hard reload
            if (response.status === 200 && newCampaign && ! $user.campaigns.find( campaign => campaign._id === newCampaign._id)) {
                user.update( userInfo => {
                    return Object.assign( userInfo, { campaigns: userInfo.campaigns.concat([newCampaign]) });
                });
            }
        }
        catch (err) {

        }
        joinDialogOpen = false;
        joinInProgress = false;
    }

    const rejectJoin = () => {
        joinDialogOpen = false;
        replace('/');
    }

    const renameCampaign = async () => {
        try {            
            await axios.post('/api/rename-campaign', {
                campaignID: $selectedCampaign._id,
                newName: $selectedCampaign.name
            });

            user.update( userInfo => {
                return Object.assign(userInfo, { 
                    campaigns: userInfo.campaigns.map(campaign => {
                        if (campaign._id === $selectedCampaign._id) {
                            campaign.name = $selectedCampaign.name
                        }
                        return campaign;
                    })
                });
            });

        }
        catch (err) {
        }
    }
    
</script>

<!-- preloads all the background waves for more seamless theme-switching -->
{#each Object.keys(BG_WAVES) as WAVE_ID}
    <link rel="preload" as="image" href={BG_WAVES[WAVE_ID]} />
{/each}

<dashboard-main>
    <div class="dashboard-container">
        <DashboardHeader></DashboardHeader>
        <div class="dashboard-content">
            <div class:active = {$campaignDetailActive} class="campaigns-list">
                {#if $campaignNewActive}
                    <DashboardBox component={CampaignChoice}>
                        <h3 slot="title">Add Campaign</h3>
                    </DashboardBox>
                {:else}
                    <DashboardBox component={Campaigns}>
                        <h3 slot="title">Your Campaigns</h3>
                    </DashboardBox>
                {/if}
            </div>
            {#if $campaignDetailActive}
                <div class="campaign-detail" transition:fade="{{ duration: 100 }}">
                    <DashboardBox component={CampaignDetail}>
                        <h3 slot="title">
                            {#if $selectedCampaign.owner._id === $user._id}
                                <InPlaceEdit bind:value={$selectedCampaign.name} on:submit={() => renameCampaign()}/>
                            {:else}
                                {$selectedCampaign.name}
                            {/if}
                        </h3>
                    </DashboardBox>
                </div>
            {/if}   
        </div>
    </div>
    <Dialog
        bind:open={joinDialogOpen}
        aria-labelledby="simple-title"
        surface$style="padding: 1em;"
    >
        <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
        {#if !joinInProgress}
            <div class="join-dialog">
                <div class="header">
                    <h3 class="join-title">Invited to</h3>
                </div>
                <div class="invite-info">
                    <div class="invite-info-main-line">
                        <div class="campaign-name">{inviteInfo?.campaignName ?? '???'}</div>
                        <div class="owner-name">{`by ${inviteInfo?.ownerName ?? '???'}`}</div>
                    </div>
                    {#if inviteInfo?.needsPassword}
                        <SimpleTextfield type="password" bind:value={invitePassword} placeholder="Password" icon="mdi:lock"></SimpleTextfield>
                    {/if}
                </div>
                <div class="reject-inv">
                    <SimpleButton value='Reject' 
                        icon='mdi:close' 
                        iconClass='big-icon' 
                        type='default' 
                        onClickFn={() => rejectJoin()}>
                    </SimpleButton>
                </div>
                <div class="accept-inv">
                    <SimpleButton value='Accept' 
                        icon='mdi:check' 
                        iconClass='big-icon' 
                        type='green' 
                        onClickFn={() => joinCampaign(inviteCode, invitePassword)}>
                    </SimpleButton>
                </div>
            </div>
        {:else}
            <div class="join-placeholder">
                <SimpleProgressCircle></SimpleProgressCircle>
            </div>
        {/if}
    </Dialog>
</dashboard-main>




<style>
    dashboard-main {
        background: var(--bg-waves) no-repeat;
        background-size: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .dashboard-content {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        padding: 5% 15% 0% 15%;
        position: relative;
    }
    
    .campaign-detail {
        flex: 1;
        max-width: fit-content;
    }
    
    .campaigns-list {
        flex: 0;
        transition: flex 0.5s;
    }

    .dashboard-content .active {
        flex: auto;
    }

    .join-dialog {  display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 0.5fr;
        gap: 1em;
        grid-auto-flow: row;
        grid-template-areas:
            "header header header header"
            "invite-info invite-info invite-info invite-info "
            "reject-inv reject-inv accept-inv accept-inv";
    }

    .accept-inv { grid-area: accept-inv; }

    .reject-inv { grid-area: reject-inv; }

    .header { grid-area: header; 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .join-title {
        font-family: Quicksand;
        font-weight: 400;
        font-size: 1.5em;
        margin: unset;

    }

    .invite-info { grid-area: invite-info; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .invite-info-main-line {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        font-family: Quicksand;
        gap: 0.3em;   
    }

    .campaign-name {
        color: var(--clr-accent-light);
        font-weight: 400;
    }

    .owner-name {
        text-transform: lowercase;
        font-weight: 200;
    }

    .join-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>