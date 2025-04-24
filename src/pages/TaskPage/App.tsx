import Hero from '../../HeroSection/Hero.tsx'
import Task from '../../HeroSection/Task.tsx'
import TaskPreview from '../../HeroSection/TaskPreview.tsx'

const App = () => {
  return (
    <div className='cursor-default'>
      <Hero />
      <Task />
      <TaskPreview />
      {/* Video Section */}
      <section id="how-it-works" className="bg-black py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-200">How It Works</h2>
        <div className="max-w-3xl mx-auto border-2 border-white rounded-2xl">
          <video
            controls
            className="w-full rounded-2xl shadow-xl"
            poster="/poster-image.jpg" // Optional preview image
          >
            <source id='how-it-works-video' src="/ras song.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <main />     hello
    </div>
  )
}

export default App