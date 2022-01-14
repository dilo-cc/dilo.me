<script lang="ts">
  export let name: string;
  const colors = ["primary", "link", "info", "success", "warning", "danger"];
  let classes = "hero is-fullheight is-danger";
  const randomColor = () => {
    classes = [
      "hero is-fullheight",
      `is-` + colors[Math.round(Math.random() * colors.length)],
    ].join(" ");
  };
  setInterval(randomColor, 2000);
</script>

<section class={classes}>
  <div class="hero-body">
    <div class="">
      <p class="title is-10">dilo</p>
      <p class="subtitle">
        {name}
      </p>
    </div>
  </div>
</section>
