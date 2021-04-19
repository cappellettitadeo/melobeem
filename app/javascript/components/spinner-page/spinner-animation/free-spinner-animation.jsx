import propTypes from "prop-types";
import React from "react";

const FreeSpinnerAnimation = ({ angle }) => {
  return (
    <svg
      width="340"
      height="340"
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd)">
        <animateTransform
          fill="freeze"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 170 170"
          to={`${angle} 170 170`}
          dur="5s"
          animation-timing-function="cubic-bezier(0,1.01,0,1.01)"
          // repeatCount="indefinite"
        />

        <g filter="url(#filter1_ddd)">
          <path
            d="M170 41C170 34.3726 175.382 28.947 181.985 29.5103C196.395 30.7396 210.553 34.1806 223.958 39.733C237.363 45.2854 249.808 52.8641 260.866 62.1837C265.934 66.4547 265.903 74.0969 261.217 78.7832L170 170L170 41Z"
            fill="#F8ECF0"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.889 84.7991L198.178 72.6056C197.438 71.2613 197.044 69.7141 197.176 68.1498C197.718 61.7264 205.921 57.5274 210.757 62.9303C210.869 63.0553 210.978 63.1844 211.085 63.3179L212.991 65.6956L216.024 65.4126C216.195 65.3966 216.364 65.3856 216.531 65.3789C223.777 65.0995 226.461 73.9156 222.22 78.7706C221.187 79.953 219.801 80.7451 218.321 81.1477L204.889 84.7991Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M192.286 116.228L187.971 108.389C187.496 107.525 187.242 106.53 187.327 105.525C187.676 101.396 192.949 98.6961 196.058 102.169C196.13 102.25 196.2 102.333 196.269 102.419L197.494 103.947L199.444 103.765C199.554 103.755 199.662 103.748 199.77 103.743C204.428 103.564 206.153 109.231 203.427 112.352C202.763 113.112 201.872 113.622 200.92 113.881L192.286 116.228Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M198.127 102.057L192.853 92.4759C192.272 91.4198 191.962 90.2041 192.066 88.975C192.492 83.928 198.938 80.6287 202.737 84.8738C202.825 84.9721 202.911 85.0734 202.995 85.1784L204.492 87.0465L206.876 86.8241C207.01 86.8116 207.142 86.8029 207.274 86.7977C212.967 86.5781 215.076 93.505 211.744 97.3196C210.933 98.2487 209.843 98.8711 208.68 99.1874L198.127 102.057Z"
          fill="#FF7098"
        />
        <g filter="url(#filter2_ddd)">
          <path
            d="M299 169.738C305.628 169.74 311.055 164.36 310.493 157.756C309.268 143.347 305.831 129.187 300.282 115.78C294.734 102.374 287.159 89.9271 277.842 78.8664C273.573 73.7975 265.93 73.826 261.243 78.511L170 169.702L299 169.738Z"
            fill="#FF7098"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M254.396 134.849L258.12 121.438C258.531 119.96 259.33 118.578 260.518 117.552C265.396 113.337 274.198 116.069 273.879 123.313C273.871 123.481 273.86 123.649 273.843 123.82L273.543 126.852L275.91 128.77C276.043 128.878 276.172 128.988 276.296 129.101C281.673 133.966 277.429 142.146 271.003 142.653C269.438 142.777 267.893 142.374 266.553 141.627L254.396 134.849Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M237.24 142.167L240.166 131.63C240.489 130.469 241.117 129.383 242.05 128.576C245.883 125.265 252.798 127.411 252.548 133.103C252.542 133.235 252.533 133.367 252.519 133.501L252.284 135.884L254.144 137.391C254.248 137.475 254.349 137.562 254.447 137.65C258.672 141.473 255.337 147.9 250.288 148.299C249.059 148.396 247.845 148.08 246.792 147.493L237.24 142.167Z"
          fill="white"
        />
        <g filter="url(#filter3_ddd)">
          <path
            d="M299 170.036C305.627 170.038 311.051 175.422 310.486 182.025C309.253 196.434 305.808 210.592 300.252 223.995C294.695 237.398 287.113 249.841 277.79 260.896C273.518 265.963 265.876 265.93 261.191 261.242L170 170L299 170.036Z"
            fill="#F8ECF0"
          />
        </g>
        <path
          d="M170 299C170 305.627 175.382 311.053 181.986 310.49C196.395 309.26 210.554 305.819 223.958 300.267C237.363 294.715 249.808 287.136 260.866 277.816C265.934 273.545 265.903 265.903 261.217 261.217L170 170V299Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M205.071 254.529L218.463 258.324C219.939 258.742 221.317 259.549 222.337 260.742C226.526 265.642 223.748 274.429 216.506 274.072C216.338 274.064 216.17 274.051 215.999 274.033L212.969 273.718L211.038 276.075C210.93 276.208 210.819 276.336 210.706 276.46C205.813 281.811 197.655 277.525 197.181 271.096C197.065 269.53 197.476 267.987 198.23 266.651L205.071 254.529Z"
          fill="white"
        />
        <g filter="url(#filter4_ddd)">
          <path
            d="M170 299C170 305.627 164.618 311.053 158.014 310.49C143.605 309.26 129.446 305.819 116.042 300.267C102.637 294.715 90.1919 287.136 79.1338 277.816C74.0661 273.545 74.0968 265.903 78.7831 261.217L170 170V299Z"
            fill="#F8ECF0"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.946 254.475L141.65 266.673C142.389 268.017 142.782 269.565 142.649 271.129C142.103 277.552 133.896 281.746 129.064 276.339C128.952 276.214 128.843 276.085 128.736 275.952L126.832 273.573L123.798 273.854C123.628 273.87 123.459 273.88 123.292 273.887C116.046 274.162 113.368 265.344 117.612 260.492C118.645 259.31 120.032 258.519 121.513 258.117L134.946 254.475Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.109 222.519L152.418 230.361C152.893 231.226 153.146 232.22 153.06 233.226C152.709 237.355 147.433 240.051 144.327 236.575C144.255 236.495 144.185 236.412 144.116 236.326L142.892 234.797L140.942 234.977C140.832 234.988 140.724 234.995 140.616 234.999C135.958 235.175 134.236 229.507 136.965 226.387C137.629 225.628 138.521 225.119 139.473 224.861L148.109 222.519Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.244 237.302L147.511 246.886C148.091 247.942 148.4 249.158 148.296 250.387C147.866 255.434 141.418 258.729 137.622 254.481C137.534 254.383 137.448 254.281 137.364 254.176L135.868 252.307L133.484 252.528C133.35 252.54 133.218 252.549 133.086 252.554C127.393 252.77 125.289 245.841 128.624 242.029C129.436 241.101 130.525 240.479 131.689 240.163L142.244 237.302Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M152.406 212.346L155.279 217.574C155.595 218.15 155.764 218.814 155.707 219.484C155.472 222.237 151.955 224.034 149.885 221.717C149.837 221.663 149.79 221.608 149.744 221.551L148.928 220.531L147.628 220.652C147.555 220.658 147.482 220.663 147.411 220.666C144.305 220.783 143.158 217.004 144.977 214.925C145.419 214.418 146.014 214.079 146.648 213.907L152.406 212.346Z"
          fill="#FF7098"
        />
        <path
          d="M40.9999 169.997C34.3725 169.998 28.9484 175.382 29.5136 181.985C30.747 196.394 34.1919 210.552 39.7481 223.955C45.3043 237.358 52.8865 249.801 62.2093 260.857C66.4817 265.923 74.1239 265.89 78.8089 261.203L170 169.96L40.9999 169.997Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.7462 204.96L80.9181 218.342C80.496 219.817 79.6857 221.193 78.4898 222.21C73.5794 226.386 64.7994 223.586 65.1743 216.345C65.1831 216.177 65.1964 216.009 65.2146 215.839L65.5376 212.809L63.1852 210.872C63.0531 210.763 62.9255 210.652 62.8019 210.539C57.4631 205.632 61.77 197.485 68.2 197.027C69.7659 196.916 71.3078 197.331 72.6421 198.088L84.7462 204.96Z"
          fill="white"
        />
        <g filter="url(#filter5_ddd)">
          <path
            d="M41.0001 169.997C34.3727 169.998 28.9456 164.618 29.507 158.014C30.7323 143.605 34.1692 129.445 39.7178 116.039C45.2665 102.632 52.8416 90.1852 62.1581 79.1244C66.4277 74.0555 74.0699 74.0841 78.7575 78.7691L170 169.96L41.0001 169.997Z"
            fill="#F8ECF0"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.9151 134.934L72.7583 141.712C71.4181 142.459 69.8731 142.862 68.3081 142.738C61.8818 142.231 57.6381 134.051 63.0146 129.185C63.1391 129.073 63.2675 128.963 63.4005 128.855L65.7677 126.937L65.4682 123.905C65.4513 123.734 65.4393 123.566 65.4318 123.398C65.1129 116.154 73.9143 113.422 78.7923 117.636C79.9803 118.663 80.7799 120.045 81.1906 121.523L84.9151 134.934Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M102.04 142.168L92.4879 147.493C91.4349 148.08 90.2209 148.396 88.9913 148.299C83.9421 147.9 80.608 141.473 84.8325 137.65C84.9302 137.562 85.0312 137.475 85.1356 137.391L86.9957 135.884L86.7604 133.501C86.7471 133.367 86.7377 133.235 86.7318 133.103C86.4814 127.411 93.3968 125.265 97.2294 128.576C98.1628 129.383 98.7911 130.469 99.1137 131.63L102.04 142.168Z"
          fill="#FF7098"
        />
        <path
          d="M170 41C170 34.3726 164.618 28.947 158.014 29.5103C143.605 30.7396 129.446 34.1806 116.042 39.733C102.637 45.2854 90.1919 52.8641 79.1338 62.1837C74.0661 66.4547 74.0968 74.0969 78.7831 78.7832L170 170V41Z"
          fill="#FF7098"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.661 84.7296L121.294 80.8489C119.821 80.4209 118.448 79.6052 117.436 78.4053C113.279 73.4785 116.114 64.7095 123.353 65.113C123.521 65.1225 123.689 65.1364 123.859 65.1553L126.888 65.4902L128.834 63.1455C128.943 63.0138 129.055 62.8867 129.168 62.7635C134.096 57.4441 142.226 61.783 142.659 68.2148C142.764 69.7811 142.343 71.3213 141.581 72.6527L134.661 84.7296Z"
          fill="white"
        />
        <path
          opacity="0.7"
          d="M170 91L181.548 142.122L225.861 114.139L197.878 158.452L249 170L197.878 181.548L225.861 225.861L181.548 197.878L170 249L158.452 197.878L114.139 225.861L142.122 181.548L91 170L142.122 158.452L114.139 114.139L158.452 142.122L170 91Z"
          fill="#F5B7C9"
        />
        <g filter="url(#filter6_d)">
          <g filter="url(#filter7_i)">
            <circle cx="170" cy="170" r="33" fill="url(#paint0_linear)" />
          </g>
          <circle cx="170" cy="170" r="32.5" stroke="white" />
          <g filter="url(#filter8_i)">
            <circle
              cx="170"
              cy="170"
              r="32"
              fill="url(#paint1_radial)"
              fillOpacity="0.71"
            />
          </g>
          <path
            d="M159.516 171.758C159.516 171.367 159.367 171.065 159.07 170.852C158.779 170.633 158.266 170.445 157.531 170.289C156.802 170.133 156.221 169.945 155.789 169.727C155.362 169.508 155.044 169.247 154.836 168.945C154.633 168.643 154.531 168.284 154.531 167.867C154.531 167.174 154.823 166.589 155.406 166.109C155.995 165.63 156.745 165.391 157.656 165.391C158.615 165.391 159.391 165.638 159.984 166.133C160.583 166.628 160.883 167.26 160.883 168.031H159.43C159.43 167.635 159.26 167.294 158.922 167.008C158.589 166.721 158.167 166.578 157.656 166.578C157.13 166.578 156.719 166.693 156.422 166.922C156.125 167.151 155.977 167.451 155.977 167.82C155.977 168.169 156.115 168.432 156.391 168.609C156.667 168.786 157.164 168.956 157.883 169.117C158.607 169.279 159.193 169.471 159.641 169.695C160.089 169.919 160.419 170.19 160.633 170.508C160.852 170.82 160.961 171.203 160.961 171.656C160.961 172.411 160.659 173.018 160.055 173.477C159.451 173.93 158.667 174.156 157.703 174.156C157.026 174.156 156.427 174.036 155.906 173.797C155.385 173.557 154.977 173.224 154.68 172.797C154.388 172.365 154.242 171.898 154.242 171.398H155.688C155.714 171.883 155.906 172.268 156.266 172.555C156.63 172.836 157.109 172.977 157.703 172.977C158.25 172.977 158.688 172.867 159.016 172.648C159.349 172.424 159.516 172.128 159.516 171.758ZM170.134 169.867C170.134 171.154 169.84 172.19 169.252 172.977C168.663 173.763 167.866 174.156 166.861 174.156C165.835 174.156 165.028 173.831 164.439 173.18V177.25H162.994V165.547H164.314L164.384 166.484C164.973 165.755 165.791 165.391 166.837 165.391C167.853 165.391 168.655 165.773 169.244 166.539C169.837 167.305 170.134 168.37 170.134 169.734V169.867ZM168.689 169.703C168.689 168.75 168.486 167.997 168.08 167.445C167.673 166.893 167.116 166.617 166.408 166.617C165.533 166.617 164.877 167.005 164.439 167.781V171.82C164.871 172.591 165.533 172.977 166.423 172.977C167.116 172.977 167.666 172.703 168.072 172.156C168.483 171.604 168.689 170.786 168.689 169.703ZM173.698 174H172.253V165.547H173.698V174ZM172.136 163.305C172.136 163.07 172.206 162.872 172.347 162.711C172.493 162.549 172.706 162.469 172.987 162.469C173.269 162.469 173.482 162.549 173.628 162.711C173.774 162.872 173.847 163.07 173.847 163.305C173.847 163.539 173.774 163.734 173.628 163.891C173.482 164.047 173.269 164.125 172.987 164.125C172.706 164.125 172.493 164.047 172.347 163.891C172.206 163.734 172.136 163.539 172.136 163.305ZM177.536 165.547L177.583 166.609C178.229 165.797 179.072 165.391 180.114 165.391C181.901 165.391 182.802 166.398 182.817 168.414V174H181.372V168.406C181.367 167.797 181.226 167.346 180.95 167.055C180.679 166.763 180.255 166.617 179.677 166.617C179.208 166.617 178.796 166.742 178.442 166.992C178.088 167.242 177.812 167.57 177.614 167.977V174H176.169V165.547H177.536Z"
            fill="white"
          />
        </g>
      </g>

      <defs>
        <filter
          id="filter0_ddd"
          x="-8"
          y="-7"
          width="356"
          height="356"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ddd"
          x="162"
          y="22.4701"
          width="110.7"
          height="156.53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_ddd"
          x="162"
          y="68.03"
          width="156.533"
          height="110.708"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_ddd"
          x="162"
          y="163"
          width="156.527"
          height="110.728"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_ddd"
          x="67.2998"
          y="163"
          width="110.7"
          height="156.53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_ddd"
          x="21.467"
          y="68.2881"
          width="156.533"
          height="110.708"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0 0.639216 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0 0.820833 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.937255 0 0 0 0 0.345098 0 0 0 0 0.627451 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d"
          x="136"
          y="137"
          width="67"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-1" dy="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.02875 0 0 0 0 0.383333 0 0 0 0 0.170583 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_i"
          x="137"
          y="137"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0930556 0 0 0 0 0.558333 0 0 0 0 0.279167 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter8_i"
          x="138"
          y="138"
          width="64"
          height="65"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.920833 0 0 0 0 0.920833 0 0 0 0 0.920833 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="170"
          y1="137"
          x2="170"
          y2="203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47D580" />
          <stop offset="1" stopColor="#107839" />
        </linearGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(169.985 174.529) rotate(92.234) scale(99.8379 98.9884)"
        >
          <stop stopColor="#4CD964" />
          <stop offset="1" stopColor="#0F9544" />
        </radialGradient>
      </defs>
    </svg>
  );
};

FreeSpinnerAnimation.propTypes = {
  angle: propTypes.number.isRequired,
};

export default FreeSpinnerAnimation;
