import me from "../../public/me.jpg";
import {Link, useNavigate} from 'react-router-dom'


function Connect() {
  document.title = 'Connect';
    const navigate   = useNavigate();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-slate-400 shadow-sm rounded-2xl border-4 border-slate-600 shadow-slate-400 overflow-hidden p-6 flex flex-col items-center sm:flex-row sm:items-center gap-6">
        <Link
          onClick={() => navigate(-1)}
          className="absolute top-2 left-2 text-xl md:text-3xl hover:text-[#6556CD] duration-300 ri-arrow-left-circle-line shadow-white "
        ></Link>
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover bg-slate-200 border-4 border-gray-200"
            src={me}
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            SHANI TIWARI
          </h2>
          {/* <hr /> */}
          <p className="text-gray-900 mb-4">
            Full Stack Developer <hr /> React, Node.js, MongoDB, Express, AI
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start gap-6 text-gray-100">
            <a
              href="https://x.com/ShaniTiwar51891"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-500 hover:scale-125 transition-all  duration-300"
            >
              {/* Twitter SVG */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.96-2.48 9.03 9.03 0 01-2.89 1.11 4.52 4.52 0 00-7.7 4.12A12.8 12.8 0 013 4s-4 9 5 13a13 13 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/shani-tiwari-aspirational/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 hover:scale-125 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 016 6v5h-4v-5a2 2 0 00-4 0v5h-4v-5a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
            </a>
            {/* leetcode */}
            <a
              href="https://leetcode.com/u/shanitiwari2021/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:text-yellow-500 hover:scale-125 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M24.894 45.67c-4.43 0-8.77-1.72-12.09-5.03a16.66 16.66 0 010-23.57L22.28 7.594a2.124 2.124 0 012.998 3.008L15.802 20.12a12.422 12.422 0 000 17.58c2.36 2.36 5.48 3.66 8.84 3.66s6.49-1.3 8.85-3.66a2.124 2.124 0 112.998 3.008c-3.32 3.32-7.65 5.03-12.09 5.03z"
                    fill="currentColor"
                  />
                  <path
                    d="M40.19 34.93a2.12 2.12 0 01-1.5-.62l-23.58-23.58a2.125 2.125 0 113-3.01l23.58 23.58a2.125 2.125 0 010 3.01c-.42.42-.97.62-1.5.62z"
                    fill="#F89F1B"
                  />
                  <path
                    d="M40.192 26.71h-24.07a2.124 2.124 0 010-4.247h24.07a2.124 2.124 0 010 4.247z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            {/* github */}
            <a
              href="https://github.com/shani-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900 hover:scale-125 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 006.84 9.49c.5.1.68-.22.68-.48v-1.68c-2.78.6-3.37-1.37-3.37-1.37-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1 1.53 1 .9 1.53 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.36-2.22-.25-4.56-1.12-4.56-4.97a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.66s.84-.27 2.75 1a9.46 9.46 0 015 0c1.9-1.27 2.74-1 2.74-1a3.6 3.6 0 01.1 2.66 3.9 3.9 0 011 2.7c0 3.86-2.34 4.72-4.57 4.97.36.3.68.9.68 1.82v2.7c0 .26.18.59.69.48A10 10 0 0022 12c0-5.5-4.5-10-10-10z" />
              </svg>
            </a>
            {/* instagram */}
            <a
              href="https://www.instagram.com/shanidevelops/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 hover:scale-125 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                </g>
              </svg>
            </a>
            {/* discord */}
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-700 hover:scale-125 transition-all duration-300"
            >
             <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"></path></svg>

            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
