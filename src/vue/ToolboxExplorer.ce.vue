<script setup lang="ts">
import { computed, ref } from 'vue'

type Group = { title: string; color: string; items: string[] }

const groups: Group[] = [
  {
    title: 'Frontend',
    color: '#ffc93c',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: '#9ed8b5',
    items: ['Node.js', 'Express.js', 'Flask', 'Laravel', 'CodeIgniter', 'PHP', 'Python', 'Golang', 'REST API'],
  },
  {
    title: 'Data & Tools',
    color: '#9ec1ff',
    items: ['Supabase', 'PostgreSQL', 'TensorFlow', 'Git', 'Postman', 'Java', 'C#', '.NET'],
  },
]

const active = ref<string>('All')
const filters = computed(() => ['All', ...groups.map((g) => g.title)])

const visible = computed(() => {
  if (active.value === 'All') return groups
  return groups.filter((g) => g.title === active.value)
})
</script>

<template>
  <div class="wrap">
    <div class="head">
      <p class="eyebrow">Interactive toolbox</p>
      <p class="hint">Pick a track to explore what I build with. (Vue component)</p>
    </div>
    <div class="filters" role="tablist" aria-label="Skill categories">
      <button
        v-for="f in filters"
        :key="f"
        type="button"
        class="filter"
        :class="{ on: active === f }"
        :aria-pressed="active === f"
        @click="active = f"
      >
        {{ f }}
      </button>
    </div>
    <div class="groups">
      <section v-for="g in visible" :key="g.title" class="group" :style="{ '--accent': g.color }">
        <h4 class="gtitle">{{ g.title }}</h4>
        <ul class="chips">
          <li v-for="item in g.items" :key="item" class="chip">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style>
:host {
  display: block;
  font-family: "Bricolage Grotesque", sans-serif;
  color: #14213d;
}
.wrap {
  background: #f7f5ee;
  border: 3px solid #14213d;
  box-shadow: 6px 6px 0 #14213d;
  padding: 20px 22px 22px;
  transform: rotate(-0.6deg);
}
.head { margin-bottom: 12px; }
.eyebrow {
  margin: 0;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.02em;
}
.hint {
  margin: 2px 0 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 16px;
  line-height: 1.4;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 16px;
}
.filter {
  font: inherit;
  font-weight: 700;
  font-size: 15px;
  padding: 6px 14px;
  border: 2.5px solid #14213d;
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
}
.filter:hover { transform: translateY(-2px); }
.filter.on {
  background: #14213d;
  color: #ffc93c;
}
.groups { display: grid; gap: 14px; }
.group {
  border-left: 6px solid var(--accent);
  padding-left: 12px;
}
.gtitle {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 800;
}
.chips {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  padding: 4px 12px;
  border: 2px solid #14213d;
  border-radius: 999px;
  background: var(--accent);
  font-weight: 600;
  font-size: 14px;
}
</style>
