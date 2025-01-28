import React from 'react';
import { createPortal } from 'react-dom';
export default function ResultModal({ref, result}) {
  const dailogRef = React.useRef();

  React.useImperativeHandle(
    ref,() => {
      return {
        open() {
          dailogRef.current.showModal();
        }
      }
    });

    //createPortal creates overlay, now this modal is displayed on top of the TimerChallenge/ App.jsx
  return createPortal(
    <dialog ref={dailogRef} className="result-modal">
      <p>You {result}</p>
      <p>Your prediction was {result === 'win' ? 'closer' : 'far'}</p>
      <form method="dailog">
        <button>Close</button>  
      </form>
    </dialog>,
    document.getElementById('modal')
  )
}