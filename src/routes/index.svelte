<script>
  import {
    Container,
    Row,
    Col,
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
    CardText,
  } from "svelte-materialify";
  import { blur, slide } from "svelte/transition";
  import {
    mdiEmoticonOutline,
    mdiEmoticonFrownOutline,
    mdiPlaylistCheck,
    mdiSpellcheck,
    mdiChevronDown,
  } from "@mdi/js";

  import { ori_items } from "./wordlist";

  let items = ori_items;

  let knows = [
    { word: "apple", mean: "🍎 사과", example: "Apple is an apple." },
    {
      word: "Pineapple",
      mean: "🍍 파인애플",
      example: "Pineapple is not fine.",
    },
    { word: "Banana", mean: "🍌 바나나", example: "Banana is delicious" },
    { word: "LEMMON", mean: "🍋 레몬", example: "Lemon with vodka" },
    { word: "apple", mean: "🍎 사과", example: "Apple is an apple." },
    {
      word: "Pineapple",
      mean: "🍍 파인애플",
      example: "Pineapple is not fine.",
    },
    { word: "Banana", mean: "🍌 바나나", example: "Banana is delicious" },
    { word: "LEMMON", mean: "🍋 레몬", example: "Lemon with vodka" },
    {
      word: "orange",
      mean: "🍊 오렌지",
      example: "Cali orange makes IT better.",
    },
    {
      word: "Watermelon",
      mean: "🍉 수박",
      example: "Which one is better, melon or with water?",
    },
    { word: "apple", mean: "🍎 사과", example: "Apple is an apple." },
    {
      word: "Pineapple",
      mean: "🍍 파인애플",
      example: "Pineapple is not fine.",
    },
    { word: "Banana", mean: "🍌 바나나", example: "Banana is delicious" },
    { word: "LEMMON", mean: "🍋 레몬", example: "Lemon with vodka" },
    {
      word: "orange",
      mean: "🍊 오렌지",
      example: "Cali orange makes IT better.",
    },
    {
      word: "Watermelon",
      mean: "🍉 수박",
      example: "Which one is better, melon or with water?",
    },
  ];

  let value = 0;

  const removeFromList = (list, item) => list.filter((t) => t !== item);
  const addToList = (list, item) => [item, ...list];

  let wordStatus;
  let meanStatus;
  function refreshList() {
    wordStatus = new Array(items.length).fill(false);
    meanStatus = new Array(items.length).fill(false);
  }
  refreshList();
</script>

<MaterialApp>
  <div class="tabs">
    <Tabs class="grey-text elevation-4" bind:value fixedTabs>
      <div slot="tabs">
        <Tab>
          <div class="tab">
            <Icon path={mdiPlaylistCheck} /> Word
          </div>
        </Tab>
        <Tab>
          <div class="tab">
            <Icon path={mdiSpellcheck} /> Checked
          </div>
        </Tab>
      </div>
    </Tabs>
  </div>

  <Window {value}>
    <div class="main">
      <WindowItem>
        {#each items as item, i}
          <div class="mt-4 mb-4 d-flex">
            <div class="cardA ml-2">
              <Card
                on:click={() => {
                  wordStatus[i] = !wordStatus[i];
                  console.log(wordStatus);
                }}
              >
                <CardActions class="ma-0 pa-2">
                  <Button
                    block="true"
                    text
                    on:click={() => {
                      wordStatus[i] = !wordStatus[i];
                      // console.log(wordStatus);
                    }}
                  >
                    {#if !wordStatus[i]}
                      <div in:blur>
                        <p class="text-h5 ma-1 pa-0 text-left text-lowercase">
                          {item.word}
                        </p>
                      </div>
                    {:else}
                      <div in:blur>
                        <Button
                          outlined
                          on:click={() => {
                            knows = addToList(knows, item);
                            items = removeFromList(items, item);
                            // refreshList();
                            console.log(knows);
                          }}
                        >
                          I know! <Icon path={mdiEmoticonOutline} /></Button
                        >
                        <Button class="ml-4" outlined
                          >Yet..<Icon path={mdiEmoticonFrownOutline} /></Button
                        >
                      </div>
                    {/if}
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div class="cardB">
              <Card>
                <CardActions class="ma-0 pa-2">
                  <Button
                    block="true"
                    text
                    on:click={() => {
                      meanStatus[i] = !meanStatus[i];
                      console.log(meanStatus);
                    }}
                  >
                    <p class="ma-1 pa-0">
                      {#if !wordStatus[i]}
                        <div in:blur>
                          <p class="text-body-1 example ma-1 pa-0 text-left">
                            {item.example}
                            <Icon
                              path={mdiChevronDown}
                              rotate={meanStatus[i] ? 180 : 0}
                            />
                          </p>
                        </div>
                      {:else}
                        <div in:blur>
                          <p class="ma-1 pa-0 text-left text-lowercase">
                            {item.word}
                          </p>
                        </div>
                      {/if}
                    </p>
                  </Button>
                </CardActions>
                {#if meanStatus[i]}
                  <div transition:slide>
                    <Divider />
                    <div class="exampleMean pl-4 pr-4 pt-2 pb-2">
                      {item.mean}
                    </div>
                  </div>
                {/if}
              </Card>
            </div>
          </div>
        {/each}
      </WindowItem>
      <WindowItem>
        {#each knows as know, i}
          <div class="d-block justify-center mt-4 ml-2 mr-2 mb-4">
            <Card style="block">
              <CardText>
                <div class="text-lowercase text--primary text-h4">
                  {know.word}
                </div>
                <div class=" mt-2 text-h6">{know.mean}</div>
                <div class="text--primary text-body-1">
                  {know.example}
                </div>
              </CardText>
              <!-- <CardActions>
              <Button text class="primary-text">Learn More</Button>
            </CardActions> -->
            </Card>
          </div>
        {/each}
      </WindowItem>
    </div>
  </Window>
</MaterialApp>

<style>
  div.cardA {
    width: 48vw;
    margin-left: 1vw;
  }
  div.cardB {
    width: 48vw;
    margin-left: 1vw;
  }
  .example {
    max-width: 35vw;
    padding: 0;
    text-transform: none;
    white-space: normal;
    word-break: keep-all;
    word-wrap: break-word;
    overflow: hidden;
    height: auto;
  }
  .tabs {
    /* display: block; */
    position: fixed;
    width: 100%;
    z-index: 9999;
    /* margin-top: 0px; */
  }
  .tab {
    width: 30vw;
    /* height: 100vh; */
  }
  .main {
    margin-top: 50px;
  }
  /* .tabs::-webkit-scrollbar {
    display: none;
  } */
</style>
