import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions </p>
            <p>|</p>
            <p>Privacy Police</p>
        </div>
        <div className='flex gap-3'>
            <div className="social-icon">
                <a href="https://github.com/Legaz-le" className="flex justify-center items-center">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/abylaikhan-zhumakov-25800628b/" className="flex justify-center items-center">
                <img src="/assets/icons8-linkedin.svg" alt="linked" className="w-1/2 h-1/2" />
                </a>
            </div>
        </div>
        <p className="text-white-500">© 2025 Abylaikhan. All rights reserved.</p>
    </section>
  )
}

export default Footer
