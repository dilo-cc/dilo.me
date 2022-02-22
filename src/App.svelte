<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Hero from "./parts/Hero.svelte";
  import Nav from "./parts/Nav.svelte";
</script>

<Router>
  <main>
    <Route>
      <Nav />
      <Hero />
    </Route>
  </main>
</Router>
