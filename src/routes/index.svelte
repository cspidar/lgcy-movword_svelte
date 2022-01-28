<script>
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Divider,
    Button,
    Tabs,
    Tab,
    Window,
    WindowItem,
    AppBar,
    MaterialApp,
    Icon,
  } from "svelte-materialify";
  import { slide } from "svelte/transition";
  import { mdiPlaylistCheck, mdiSpellcheck, mdiChevronDown } from "@mdi/js";

  let value = 0;

  let items = [{ word: "apple", mean: "🤢" }];

  let active = false;
  function toggle() {
    active = !active;
  }
</script>

<MaterialApp>
  <Tabs class="grey-text elevation-4" bind:value fixedTabs>
    <div slot="tabs">
      <Tab><Icon path={mdiPlaylistCheck} /> Word</Tab>
      <Tab><Icon path={mdiSpellcheck} /> Checked</Tab>
    </div>
  </Tabs>

  <Window {value}>
    <WindowItem>
      <h4 class="ma-2 mt-4">Item 1</h4>
      {#each items as item}
        <div class="ma-2">
          <Button outlined>{item.word}</Button>
        </div>
      {/each}

      <div class="cardA mt-4 mb-4">
        <Card>
          <span>
            <!-- <CardTitle>Top western road trips</CardTitle> -->
            <!-- <CardSubtitle>1,000 miles of wonder</CardSubtitle> -->
          </span>

          <span class="d-flex justify-start">
            <CardActions class="ma-0 pa-0">
              <Button class="text-left" block="true" text on:click={toggle}>
                <p class="ma-1 pa-0">Button</p>

                <Icon
                  class="text-right"
                  path={mdiChevronDown}
                  rotate={active ? 180 : 0}
                /></Button
              >

              <!-- <Button text fab size="small" class="ml-auto" on:click={toggle}>
                <Icon path={mdiChevronDown} rotate={active ? 180 : 0} />
              </Button> -->
            </CardActions>
          </span>

          {#if active}
            <div transition:slide>
              <Divider />
              <div class="pl-4 pr-4 pt-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita autem, asperiores dolores, doloremque ea atque suscipit
                dolore, ut adipisci amet possimus dicta at voluptas consequatur!
              </div>
            </div>
          {/if}
        </Card>
      </div>
      <p class="ma-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan,
        diam et elementum gravida, arcu mi fermentum nibh, vel dapibus ligula
        orci non est. Morbi commodo sagittis finibus. Maecenas in volutpat
        massa. Nullam vulputate metus velit, quis interdum elit imperdiet ut.
        Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit
        amet justo vitae commodo. Lorem ipsum dolor sit amet, consectetur nibh,
        vel dapibus ligula orci non est. Morbi commodo sagittis finibus.
        Maecenas inn est. Morbi commodo sagittis finibus. Maecenas in volutpat
        massa. Nullam vulputate metus velit, quis interdum elit imperdiet ut.
        Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit
        amet justo vitae commodo.
      </p>
    </WindowItem>
    <WindowItem>
      <h4 class="ma-2 mt-4">Item 2</h4>
      <p class="ma-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan,
        diam et elementum gravida, arcu mi fermentum nibh, vel dapibus ligula
        orci non est. Morbi commodo sagittis finibus. Maecenas in volutpat
        massa. Nullam vulputate metus velit, quis interdum elit imperdiet ut.
        Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit
        amet justo vitae commodo.
      </p>
    </WindowItem>
  </Window>
</MaterialApp>

<style>
  div.cardA {
    box-sizing: border-box;
    width: 50vw;
  }
</style>
