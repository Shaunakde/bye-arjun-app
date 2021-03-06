import React, { useContext } from "react";
import style from "./style.module.scss";
import context from "../../context";
import { REACT_APP_FORM_URL } from "../../configuration";

const Response = ({ timestamp, email, message, name }) => (
  <div className={style.response} key={timestamp}>
    <div className={style.name}>{name}</div>
    <div className={style.message}>{message}</div>
  </div>
);

function App() {
  let responses = useContext(context);
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <svg
          className={style.logo}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 234 60"
        >
          <g fill="none" fillRule="nonzero">
            <path
              fill="#0F384D"
              d="M82.04 39.46a9.58 9.58 0 1 1 0-19.17 9.3 9.3 0 0 1 9.49 9.5c-.01 5.48-4.14 9.67-9.5 9.67h.01zm-.09-15.65c-3.21 0-5.68 2.64-5.68 6.1 0 3.48 2.47 6.08 5.68 6.08 3.22 0 5.71-2.59 5.71-6.1 0-3.52-2.43-6.08-5.69-6.08h-.02zm14.87 2.52v1.86c.62-1.6 1.56-2.3 3.19-2.3h.43v3.58h-.72c-1.91 0-2.88 1.17-2.88 3.5v6.18h-3.52V26.33h3.5zm8.92 12.8h-3.52V20.65h3.52v7.21a5 5 0 0 1 4.16-2c3.77 0 6.47 2.87 6.47 6.94 0 4.08-2.59 6.74-6.3 6.74-1.94 0-3.18-.55-4.3-2.05l-.03 1.64zm3.4-2.39c2.03 0 3.46-1.6 3.46-3.9s-1.44-4-3.38-4-3.52 1.77-3.52 4.05 1.43 3.85 3.45 3.85h-.01zM119.9 24.6a1.9 1.9 0 0 1-1.94-1.96 1.88 1.88 0 0 1 1.94-1.95 1.96 1.96 0 0 1 0 3.91zm1.77 14.53h-3.52v-12.8h3.52v12.8zm6.97-3.77c0 .6.28.83 1 .83h.6v2.94h-2.82c-1.64 0-2.33-.7-2.33-2.44v-7.47h-1.44v-2.97h1.44V22.8h3.55v3.45h1.6v2.97h-1.6v6.14zm13.54-9.03h3.55v12.82h-3.52v-1.77a5.3 5.3 0 0 1-4.5 2.16c-3.6 0-6.18-2.78-6.18-6.69 0-4.02 2.72-6.98 6.47-6.98 1.75 0 2.96.6 4.18 2.08v-1.62zm.05 6.33c0-2.22-1.47-3.8-3.55-3.8-1.97 0-3.4 1.66-3.4 3.96s1.46 3.94 3.4 3.94 3.45-1.69 3.55-3.9v-.2zm5.93 6.47V20.65h3.52v18.48h-3.52zm15.82 0h-3.77V20.65h3.77v18.48zm6.04-12.8v1.56c.92-1.45 1.89-2 3.45-2 1.17-.02 2.3.4 3.16 1.2.88.88 1.14 1.82 1.14 3.96v8.1h-3.52V31.2c0-1.56-.67-2.36-2-2.36s-2.25 1.02-2.25 2.5v7.79h-3.52v-12.8h3.54zm16.37 3.7v-.22c0-.78-.7-1.33-1.64-1.33-.83 0-1.41.47-1.41 1.13 0 .67.43 1.06 1.5 1.39 2.35.7 3.32 1.14 4 1.78a3.7 3.7 0 0 1 1.07 2.66c0 2.47-2 4.1-4.96 4.1-3.08 0-4.94-1.5-5.08-4.16h3.39c.14 1.11.66 1.61 1.66 1.61.83 0 1.44-.52 1.44-1.22 0-.8-.5-1.14-2.41-1.72-2.77-.84-4-2.12-4-4.11 0-2.44 1.97-4.08 4.97-4.08 2.91 0 4.71 1.55 4.8 4.16l-3.33.01zm7.45-5.43a1.9 1.9 0 0 1-1.94-1.96 1.88 1.88 0 0 1 1.94-1.95 1.95 1.95 0 1 1 0 3.91zm1.78 14.54h-3.52v-12.8h3.52v12.8zm12.43-12.81h3.45v11.9c0 2.6-.47 4.14-1.69 5.33a7.56 7.56 0 0 1-5.32 1.95 8.63 8.63 0 0 1-6.33-2.56l2.2-2.22a5.08 5.08 0 0 0 3.99 1.78c2.33 0 3.71-1.42 3.71-3.78v-1.35a5.46 5.46 0 0 1-4.52 2.16c-3.52 0-6.1-2.8-6.1-6.71 0-4.16 2.6-6.96 6.47-6.96a4.9 4.9 0 0 1 4.16 2.02l-.02-1.56zm-3.45 2.7c-2 0-3.41 1.52-3.41 3.65 0 2.14 1.44 3.78 3.45 3.78 2.08 0 3.33-1.33 3.33-3.52 0-2.47-1.28-3.94-3.36-3.94l-.01.02v.01zm12.85-1.36c1.06-1.25 2.14-1.8 3.5-1.8 1.14.02 2.23.44 3.08 1.19.86.83 1.16 1.75 1.16 3.6v8.47h-3.52v-7.96c-.03-1.42-.78-2.33-1.94-2.33-1.39 0-2.28 1.02-2.28 2.66v7.63h-3.52V20.65h3.52v7.02zm14.24 7.69c0 .6.28.83 1 .83h.6v2.94h-2.82c-1.64 0-2.33-.7-2.33-2.44v-7.47h-1.44v-2.97h1.44V22.8h3.55v3.45h1.6v2.97h-1.6v6.14zM29.82 4.32a25.37 25.37 0 0 1 15 4.87l2.5-3.45a29.76 29.76 0 0 0-35 0l2.5 3.45a25.39 25.39 0 0 1 15-4.87zm21.26 25.51A21.27 21.27 0 0 0 29.82 8.56v4.26a17.01 17.01 0 1 1 0 34.02v4.26A21.27 21.27 0 0 1 8.56 29.83H4.31a25.53 25.53 0 0 0 38.26 22.1l-2.12-3.67a21.27 21.27 0 0 0 10.63-18.42v-.01z"
            />
            <path
              fill="#87E000"
              d="M5.56 37.73l-4.05 1.3A29.77 29.77 0 0 0 29.83 59.6v-4.26A25.51 25.51 0 0 1 5.56 37.73zm-1.25-7.9h4.25a21.27 21.27 0 0 0 21.26 21.28v-4.26a17.01 17.01 0 0 1 0-34.03V8.56c3.73 0 7.4.98 10.63 2.85l2.12-3.68A25.53 25.53 0 0 0 4.3 29.84l.01-.01zm43-24.08l-2.5 3.45a25.56 25.56 0 0 1 9.27 28.53l4.05 1.3A29.83 29.83 0 0 0 47.3 5.73v.02h.01z"
            />
            <path
              fill="#0096BD"
              d="M.06 29.84c0 3.12.49 6.23 1.45 9.2l4.04-1.3a25.56 25.56 0 0 1 9.27-28.53l-2.5-3.46A29.74 29.74 0 0 0 .06 29.84zm58.07 9.2l-4.05-1.3a25.55 25.55 0 0 0-11.5-29.98l-2.13 3.67a21.27 21.27 0 0 1 .01 36.86l2.12 3.67a25.38 25.38 0 0 1-12.75 3.42v4.26c12.9 0 24.33-8.3 28.32-20.58v-.02h-.02z"
            />
          </g>
        </svg>
        <a className={style.link} href={REACT_APP_FORM_URL}>
          Add your note to Arjun
        </a>
      </nav>
      <header className={style.title}>We'll miss you, Arjun!</header>
      {responses.map(Response)}
    </div>
  );
}

export default App;
