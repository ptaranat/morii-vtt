<script lang="ts">
    import ABILITY_TAGS from "../../../enum/AbilityTags";
    import type ClassData from "../../../interfaces/5E/ClassData";
    import MarkdownBoxText from ".././MarkdownBoxText.svelte";
    import { findHighestPossibleValue, validateClassName } from "../../../util/util";
    import BoxWithList from "../../BoxWithList.svelte";
    import type { Spell } from "../../../interfaces/5E/Character5E";
    import SpellDetail from ".././CharacterSheet/Components/SpellDetail.svelte";
    import Svelecte from 'svelecte/src/Svelecte.svelte';
    import type { ClassSpellcasting } from "../../../interfaces/5E/ClassData";
    import { SPELLS_BY_LEVEL_BLANK } from "../../../enum/SpellsByLevelBlank";
    import SimpleButton from "../../SimpleButton.svelte";
    import InPlaceEdit from "../../InPlaceEdit.svelte";
    import SimpleAccordionDetail from ".././SimpleAccordionDetail.svelte";
    import { nanoid } from "nanoid/non-secure";
    import SimpleSlider from "../../SimpleSlider.svelte";
    import type QuickCreateCharacterParts from "../../../interfaces/5E/QuickCreateCharacterParts";
    import type QuickCreateData from "../../../interfaces/5E/QuickCreateData";
 
    export let characterParts: QuickCreateCharacterParts;
    export let quickCreateData: QuickCreateData;
    export let isCompleted: boolean;

    let selectedClass: ClassData | undefined = characterParts.class;

    $ : isCompleted = selectedClass 
        && selectedClass !== undefined
        && selectedClass.spellcasting
        && selectedClass.spellcasting !== undefined
        && selectedClass.spellcasting.ability !== '---';

    let currentFilter = 0;
    let newSpell = undefined;
    let spellLevelsStr = ['cantrips', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

    $: proficiencyBonus = selectedClass ? Math.floor((selectedClass.level - 1) / 4) + 2 : 0;
    $: proficiencyBonusPretty = new Intl.NumberFormat("en-US", { signDisplay: 'exceptZero' }).format(proficiencyBonus + 0);
    
    $: if (newSpell) {
        addNewSpell(~~newSpell.level, Object.assign(newSpell, { 
            level: ~~newSpell.level, 
            concentration: newSpell.duration.includes('Concentration'),
            components: Object.assign(newSpell.components, { materials_needed: newSpell.components.material ? newSpell.components.materials_needed.toString() : '' })
        }));
        newSpell = undefined;
    }

    $: filteredSpells = selectedClass ? quickCreateData.spells.filter(spell => {
        return ~~spell.level === currentFilter && (selectedClass?.spellcasting?.isCustom || spell.tags.includes(selectedClass.name.toLowerCase()));
    }) : [];

    const addNewSpell = (spellLevel: number = 0, spellTemplate: object = {}) => {
        const spellSkeleton: Spell = {
            id: nanoid(16),
            name: '',
            level: spellLevel,
            is_prepared: false,
            casting_time: '',
            ritual: false,
            range: '',
            school: '',
            components: {
                verbal: false,
                somatic: false,
                material: false,
                materials_needed: ''
            },
            duration: '',
            concentration: false,
            description: '',
            higher_levels: ''
        }

        selectedClass.spellcasting.spells_by_level[spellLevel].spells = selectedClass.spellcasting.spells_by_level[spellLevel].spells.concat(
            [Object.assign(spellSkeleton, { ...spellTemplate })]
        );
    };

    const deleteSpell = (spell: Partial<Spell>) => {
        selectedClass.spellcasting.spells_by_level[spell.level].spells = selectedClass.spellcasting.spells_by_level[spell.level].spells.filter(obj => obj !== spell);
    }

    const switchFilter = (index: number) => {
        currentFilter = index;
        newSpell = undefined;
    }

    const blankSpellcasting: ClassSpellcasting = {
        isCustom: true,
        ability: '---',
        ability_info: '',
        casting_info: '',
        focus: '',
        spell_slots: [ [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ],
        spells_by_level: SPELLS_BY_LEVEL_BLANK
    }

    const addCustomSpellcasting = () => {
        selectedClass.spellcasting = blankSpellcasting;
    }

    const getUniqOptionValuePerLevel = (_: number) => {
        const highestValue = findHighestPossibleValue(selectedClass.spellcasting.unique_info.levels, selectedClass.level);
        return highestValue === '' ? '0': highestValue;
    }

    const toggleUniqItem = (item) => {
        if (!selectedClass.spellcasting.unique_info.final.includes(item)) {
            selectedClass.spellcasting.unique_info.final = selectedClass.spellcasting.unique_info.final.concat([item]);
        }
        else {
            selectedClass.spellcasting.unique_info.final = selectedClass.spellcasting.unique_info.final.filter(itemIter => itemIter !== item);
        }        
    }

</script>

{#if !selectedClass || !selectedClass.spellcasting}
    <spellcasting-missing>
        {#if selectedClass}
            <p>{`${selectedClass.name} does not have spellcasting.`}<br>Do you want to add it?</p>
            <div class='add-spellcasting'>
                <SimpleButton value='Add spellcasting' icon="mdi:fire" iconClass="big-icon" type='primary' onClickFn={() => addCustomSpellcasting()}></SimpleButton>
            </div>
        {:else}
            <p>You don't have any class selected.</p>
        {/if}
    </spellcasting-missing>
{:else}
    <spellcasting-detail>
        <div class="info">
            <box class='ability'>
                <select class="box-main-text bigger-bold" bind:value={selectedClass.spellcasting.ability}>
                    <option value="" selected disabled hidden>---</option>
                    {#each ABILITY_TAGS as abilityTag}
                        <option value={abilityTag}>
                            {abilityTag}
                        </option>
                    {/each}
                </select>
                <div class="box-justify-filler"></div>
                <div class="box-label">
                    Spell Ability
                </div>
            </box>
    
            <box class='spell-save-dc'>
                <div class='box-main-text bigger-bold'>
                    {8 + proficiencyBonus + 0}
                </div>
                <div class="box-justify-filler"></div>
                <div class="box-label">
                    Spell save DC
                </div>
            </box>
    
            <box class='spell-attack'>
                <div class='box-main-text bigger-bold'>
                    {proficiencyBonusPretty}
                </div>
                <div class="box-justify-filler"></div>
                <div class="box-label">
                    Spell ATK mod
                </div>
            </box>

            <box class="prof-bonus bigger-bold">
                <div class="box-main-text">
                    {proficiencyBonusPretty}
                </div>
                <div class="box-justify-filler"></div>
                <div class="box-label">
                    Proficiency bonus
                </div>
            </box>

            {#if selectedClass.spellcasting.cantrips_known}
                <box class="cantrips-known bigger-bold">
                    <div class="box-main-text">
                        {findHighestPossibleValue(selectedClass.spellcasting.cantrips_known, selectedClass.level)}
                    </div>
                    <div class="box-justify-filler"></div>
                    <div class="box-label">
                        Cantrips known
                    </div>
                </box>
            {/if}

            {#if selectedClass.spellcasting.spells_known}
                <box class="spells-known bigger-bold">
                    <div class="box-main-text">
                        {findHighestPossibleValue(selectedClass.spellcasting.spells_known, selectedClass.level)}
                    </div>
                    <div class="box-justify-filler"></div>
                    <div class="box-label">
                        Spells known
                    </div>
                </box>
            {/if}
            <box class="level-slider">
                <div class="box-main-text">
                    <SimpleSlider bind:value={selectedClass.level}></SimpleSlider>
                </div>
                <div class="box-justify-filler"></div>
                <div class="box-label">
                    Class Level
                </div>
            </box>
        </div>

        <div class='spells-header'>
            <div class='add-spell'>
                <h4>Add Spell:</h4>
                <Svelecte 
                    options={filteredSpells}
                    valueAsObject
                    placeholder='{currentFilter === 0 ? '': `${spellLevelsStr[currentFilter]} level`} {selectedClass.spellcasting.isCustom ? 'All' : selectedClass.name} {currentFilter === 0 ? 'cantrips': 'spells'}'
                    bind:value={newSpell}>
                </Svelecte>
            </div>
            {#if currentFilter !== 0}
                <box class="spell-slots bigger-bold">
                    <div class="box-main-text">
                        <InPlaceEdit bind:value={selectedClass.spellcasting.spell_slots[selectedClass.level - 1][currentFilter - 1]} editWidth="3em" editHeight="1.5em"></InPlaceEdit>  
                    </div>
                    <div class="box-justify-filler"></div>
                    <div class="box-label">
                        {spellLevelsStr[currentFilter]} Level Spell Slots
                    </div>
                </box>
            {/if}
        </div>

        <BoxWithList label='Spells by level' inlineStyle='grid-area: spells;' addNewListItem={() => addNewSpell(currentFilter)} isModifyDisabled>
            <div class="filter-menu" slot='filter-menu'>
                {#each spellLevelsStr as spellLevel, index}
                    <sendable class="filter-names {currentFilter === index ? 'filter-selected': ''}"
                        on:click={ () => switchFilter(index)} on:keyup={() => {}}
                    >
                        {spellLevel}
                    </sendable>
                {/each}
            </div>   
            <div class="class-spell-list" slot='list'>
                {#each selectedClass.spellcasting.spells_by_level[currentFilter].spells as spell, index}
                    <SpellDetail bind:spell={spell} deleteSpellFce={() => deleteSpell(spell)}></SpellDetail>
                {/each}
            </div>
        </BoxWithList>

        <box class="spell-ability-info">
            <MarkdownBoxText text={selectedClass.spellcasting.ability_info}></MarkdownBoxText>
            <div class="box-label auto-margin">
                Spellcasting ability
            </div>
        </box>

        <box class="ritual">
            <MarkdownBoxText text={selectedClass.spellcasting.ritual_casting ?? 'None'}></MarkdownBoxText>
            <div class="box-label auto-margin">
                Ritual Casting
            </div>
        </box>

        <box class="spell-focus">
            <MarkdownBoxText text={selectedClass.spellcasting.focus}></MarkdownBoxText>
            <div class="box-label auto-margin">
                Spellcasting Focus
            </div>
        </box>

        <box class="casting-info">
            <MarkdownBoxText text={selectedClass.spellcasting.casting_info}></MarkdownBoxText>
            <div class="box-label auto-margin">
                Casting Spells
            </div>
        </box>

        {#if selectedClass.spellcasting.unique_info}
            {#if selectedClass.spellcasting.unique_info.type === 'simple'}
                <box class="unique-info">
                    <MarkdownBoxText text={selectedClass.spellcasting.unique_info.content}></MarkdownBoxText>
                    <div class="box-label auto-margin">
                        {selectedClass.spellcasting.unique_info.label}
                    </div>
                </box>
            {:else}
                <BoxWithList 
                    label={selectedClass.spellcasting.unique_info.label} 
                    inlineStyle='grid-area: uniq;'
                    noCrud
                    isModifyDisabled
                >
                    <p class='unique-info-description' slot='filter-menu'>
                        
                        You can choose {getUniqOptionValuePerLevel(selectedClass.level)} options at this level.
                    </p>
                    <div class="unique-features-list" slot='list'>
                        <!-- first shows the features which are selected, then compares the names alphabetically -->
                        {#each selectedClass.spellcasting.unique_info.options.sort((a, b) => {
                            const isASelected = selectedClass.spellcasting.unique_info.final.includes(a);
                            const isBSelected = selectedClass.spellcasting.unique_info.final.includes(b);
                            
                            if (isASelected && ! isBSelected) {
                                return -1;
                            }
                            else if (isBSelected && !isASelected) {
                                return 1;
                            }
                            return a.name.localeCompare(b.name);
                        }) as feature}
                            <SimpleAccordionDetail 
                                bind:value={feature.name} 
                                bind:content={feature.content}
                                selectable
                                editable={false}
                                textareaHeight='15em'
                                isSelected={selectedClass.spellcasting.unique_info.final.includes(feature)}
                                toggleItem={() => toggleUniqItem(feature)}>
                            </SimpleAccordionDetail>
                        {/each}
                    </div>
                </BoxWithList>
            {/if}
        {/if}

    </spellcasting-detail>
{/if}

<style>

    spellcasting-detail { grid-area: step-detail;
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        gap: 0.5em 0.5em; 
        grid-template-areas: 
            "info info info info info info info info info info info info"
            "spell-ability-info spell-ability-info spell-ability-info casting-info casting-info casting-info casting-info spells-header spells-header spells-header spells-header spells-header"
            "spell-ability-info spell-ability-info spell-ability-info casting-info casting-info casting-info casting-info spells spells spells spells spells"
            "spell-ability-info spell-ability-info spell-ability-info casting-info casting-info casting-info casting-info spells spells spells spells spells"
            "uniq uniq uniq casting-info casting-info casting-info casting-info spells spells spells spells spells"
            "uniq uniq uniq casting-info casting-info casting-info casting-info spells spells spells spells spells"
            "uniq uniq uniq ritual ritual spell-focus spell-focus spells spells spells spells spells"
            "uniq uniq uniq ritual ritual spell-focus spell-focus spells spells spells spells spells"; 
    }

    spellcasting-detail box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;        
    }

    spellcasting-missing { grid-area: step-detail;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    spellcasting-missing p {
        font-size: 2em;
        font-weight: 400;
    }

    :global(.add-spellcasting simple-button) {
        font-size: large;
        padding: 0.5em;
    }

    .info { grid-area: info;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em; 
    }

    .info box {
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1;
    }

    .ability {
        align-items: center;
    }

    .level-slider {
        align-items: unset;
        width: 100%;
        flex: 4 !important;
    }

    .prof-bonus {
        padding: 0em 0.25em;
    }

    .spells-header { grid-area: spells-header;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
    }

    .class-spell-list {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.25em;
    }

    :global(.class-spell-list > .spell-main-container) {
        padding: 0.2em 0em;
    }

    :global(.add-spell .mdc-menu-surface--open) {
        max-height: 55vh;
    }

    .add-spell {
        display: flex;
        gap: 0.5em;
        align-content: center;
        justify-content: center;
        flex: 5;
    }

    .add-spell h4 {
        font-family: Athiti, sans-serif;
        font-size: large;
        font-weight: 500;
        margin: 0em;
        text-transform: uppercase;
        align-self: center;
    }

    :global(.add-spell > .svelecte-control) {
        max-width: 16em;
        --sv-min-height: 3em !important;
    }

    .spell-slots {
        flex: 2;
    }

    .filter-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7em;
        padding-top: 0.5em;
    }

    .filter-menu sendable {
        cursor: pointer;
        transition-duration: 500ms;
        transition-property: border; 
        font-family: Athiti;
        text-transform: uppercase;
    }

    .filter-selected {
        border-bottom: 1px solid var(--clr-accent-normal); 
        padding-bottom: 0.2em;
    }

    .spell-ability-info { grid-area: spell-ability-info; }
    .ritual { grid-area: ritual;}
    .spell-focus { grid-area: spell-focus; }
    .casting-info { grid-area: casting-info; }
    .unique-info { grid-area: uniq; }

    .unique-features-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25em;
        padding-bottom: 4px;
    }

    select {
        background-color: inherit;
    }

    .bigger-bold {
        font-weight: var(--semi-bold);
        font-size: 1.5em;
    }

    .box-label.auto-margin {
        margin-top: auto;
    }

</style>