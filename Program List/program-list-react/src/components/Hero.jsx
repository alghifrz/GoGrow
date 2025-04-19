import React from 'react'

const Hero = ({title = 'Became a', title2 = 'IT Enthusiast', subtitle = 'Join our community to learn and grow as a developer'}) => {
  return (
    <>
        <section className='bg-primary py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-medium text-white sm:text-5xl md:text-6xl'>
                        { title } <span className='text-secondary font-extrabold'>{ title2 }</span>
                    </h1>
                    <p className='my-4 text-xl text-white'>{ subtitle }</p>
                </div>

            </div>

        </section>
    </>
  )
}

export default Hero