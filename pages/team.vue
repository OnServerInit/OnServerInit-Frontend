<template>
  <div>
    <h1>Our Team</h1>
    <div class="team-rank">
      <h2>Developers</h2>
      <div class="rank-members">
        <div class="member">
          <div class="dev-bg"></div>
          <div class="centered">
            <img
                src="https://cdn.discordapp.com/avatars/474482013886480385/e543f843de646d28313d5fdd63cbf813.webp?size=1024"
                alt="">
            <h3>JustDoom</h3>
            <p>Backend</p>
          </div>
        </div>

        <div class="member">
          <div class="dev-bg"></div>
          <div class="centered">
            <img
                src="https://cdn.discordapp.com/avatars/335291927609999371/f4174fbba324ed200cdb175bd41be2dd.webp?size=1024"
                alt="">
            <h3>Cyric</h3>
            <p>Frontend</p>
          </div>
        </div>
      </div>
    </div>
    <div class="team-rank">
      <h2>Contributors</h2>
      <div class="rank-members">
        <div class="member">
          <div class="centered">
            <img
                src="https://cdn.discordapp.com/avatars/240721111174610945/8e0bcd6293238b85d9d76d713187ebb4.webp?size=1024"
                alt="">
            <h3>Zak</h3>
            <p>Contributed</p>
          </div>
        </div>
      </div>
    </div>
    <div class="team-rank">
      <h2>Moderators</h2>
      <div class="rank-members">
        <div class="member">
          <div class="centered">
            <img
                src="https://cdn.discordapp.com/avatars/384404967961657346/2afd51966ba9aff955bc5d3f81b34cc7.webp?size=1024"
                alt="">
            <h3>AndyMated</h3>
            <p>Discord Mod</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team"
}
</script>

<style scoped>

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.team-rank {
  margin-top: 2rem;
}

.rank-members {
  display: flex;
  flex-wrap: wrap;
}

.member {
  height: 300px;
  width: 225px;
  border-radius: 15px;
  background-color: #F3F4F6;
  position: relative;
  text-align: center;
  margin-top: 1rem;
  overflow: hidden;
}

.member:not(:first-child) {
  margin-left: 1rem;
}

.member:hover img {
  outline: 10px solid #DC2626;
}

.member:hover .dev-bg {
  margin-top: -90px;
}

.member img {
  width: 75px;
  height: 75px;
  background-color: #D1D5DB;
  border-radius: 100px;
  margin-left: auto;
  margin-bottom: 15px;
  outline: 0px solid #DC2626;
  transition: all 0.5s ease;
}

.dev-bg {
  margin-top: -100px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 200%;
  height: 200px;
  border-radius: 0 0 100% 100%;
  background-color: #EF4444;
  transition: all 0.5s ease;
}
</style>