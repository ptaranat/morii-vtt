<script lang="ts">
    import { modifyCharacter } from "../stores";
    import Icon from '@iconify/svelte';

    export let label: string;
    export let styleClass: string = '';
    export let inlineStyle: string = '';
    export let addNewListItem: () => void = () => {};
    export let isModifyDisabled: boolean = false;
    export let noCrud: boolean = false;

</script>

<box class="inside-box-content {styleClass}" style={inlineStyle}>
    <slot name="filter-menu"></slot>
    <div class="inside-box-list">
        <slot name="list"></slot>
        {#if !noCrud}
            <sendable class="add-new-item" on:click={() => { addNewListItem(); if (!isModifyDisabled) { $modifyCharacter()}}} on:keyup={() => {}}>
                <Icon class="big-icon" icon="mdi:add" />
            </sendable>
        {/if}
    </div>
    <div class="box-justify-filler"></div>
    <div class="box-label">
        {label}
    </div>
</box>


<style>
    .inside-box-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
    }

    .inside-box-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 0.25em;
        scrollbar-width: thin;
        overflow-y: auto;
        margin-top: 0.5em;
    }

    .add-new-item {
        padding-top: 0.3em;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #1d1d22;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #757578;
        border: transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #404044;
    }


</style>