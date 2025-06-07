<template>
  <v-app>
    <v-app-bar class="app-header">
      <v-img src="/flowa-logo.png" height="48" width="48"/>
    </v-app-bar>
    <v-main>
      <v-img
src="/background.png" cover min-height="calc(100vh - var(--v-layout-bottom))" width="calc(100vw - var(--v-layout-left) - var(--v-layout-right))"
        style="margin-top: calc(0px - var(--v-layout-top))">

        <v-container fluid class="fill-height d-flex flex-column align-center justify-center" style="padding-top: var(--v-layout-top)">
          <div class="pb-8">
            <v-avatar size="200" style="box-shadow: 0px 0px 15px -1px #41ACA3;">
              <v-img src="/portait-florian-wagner.jpg"/>
            </v-avatar>
          </div>
          <div class="pa-8 text-center header-box">
            <div class="text-h4 text-sm-h3">Hello my name is</div>
            <div class="text-h2 text-sm-h1 pt-6 gradient-text">Florian Wagner</div>
            <div class="pt-4">Frontend Engineer / UX Designer / Workflow Optimizer / Backend Enthusiast</div>
          </div>
          <div class="pt-2">
            <v-btn variant="text" icon href="https://github.com/Flows-git">
              <Icon name="simple-icons:github" size="32px"/>
            </v-btn>
            <v-btn variant="text" icon href="https://github.com/Flows-git" class="mx-2">
              <Icon name="simple-icons:linkedin" size="32px"/>
            </v-btn>
            <v-btn variant="text" icon href="https://github.com/Flows-git">
              <Icon name="simple-line-icons:envelope" size="32px"/>
            </v-btn>
          </div>
        </v-container>
      </v-img>
    </v-main>
  </v-app>
</template>


<style scoped lang="scss">
.app-header {
  background: rgba(var(--v-theme-background), .7) !important;
  backdrop-filter: blur(8px);
}

.header-box {
  background: rgba(var(--v-theme-background), .7);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 15px -1px #41ACA3;
  max-width: 100%;
}

.gradient-text {
  background-image: linear-gradient(90deg, #186f71, #379992, #41aea4, #8df0e7, #41aea4, #379992, #186f71);
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>