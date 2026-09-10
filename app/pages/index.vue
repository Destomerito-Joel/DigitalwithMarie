<script setup lang="ts">
import Comparison from '~/components/landing/Comparison.vue'
import FadeUp from '~/components/ui/FadeUp.vue'
import Faq from '~/components/landing/Faq.vue'
import FinalCta from '~/components/landing/FinalCta.vue'
import Founder from '~/components/landing/Founder.vue'
import Footer from '~/components/landing/Footer.vue'
import Hero from '~/components/landing/Hero.vue'
import MechanismSection from '~/components/landing/MechanismSection.vue'
import Objections from '~/components/landing/Objections.vue'
import Pricing from '~/components/landing/Pricing.vue'
import ProblemSection from '~/components/landing/ProblemSection.vue'
import ResourcesOverview from '~/components/landing/ResourcesOverview.vue'
import SystemProcess from '~/components/landing/SystemProcess.vue'
import Transformation from '~/components/landing/Transformation.vue'
import ValueStack from '~/components/landing/ValueStack.vue'
import WhoItsFor from '~/components/landing/WhoItsFor.vue'

useSeoMeta({
  title: 'DigitalwithMarie | The Complete Digital Product System',
  description: 'A practical system for turning your digital product idea into something people can actually buy.',
  ogTitle: 'DigitalwithMarie | The Complete Digital Product System',
  ogDescription: 'Build, package, and launch your digital product with one clear process.',
  ogType: 'website',
})
</script>

<template>
  <div id="top">
    <Hero />
    <FadeUp><ProblemSection /></FadeUp>
    <FadeUp><MechanismSection /></FadeUp>
    <FadeUp><Transformation /></FadeUp>
    <FadeUp><ResourcesOverview /></FadeUp>
    <FadeUp><SystemProcess /></FadeUp>
    <FadeUp><ValueStack /></FadeUp>
    <FadeUp><Pricing /></FadeUp>
    <FadeUp><WhoItsFor /></FadeUp>
    <FadeUp><Comparison /></FadeUp>
    <FadeUp><Objections /></FadeUp>
    <FadeUp><Founder /></FadeUp>
    <FadeUp><Faq /></FadeUp>
    <FadeUp><FinalCta /></FadeUp>
    <Footer />
  </div>
</template>