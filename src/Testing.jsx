import React from 'react'
import { Glow, GlowCapture } from '@codaworks/react-glow'

function Testing() {
  return (
    <div className="section">
      <div className="wrapper mx-64">
        <GlowCapture>
          <div className="listt grid grid-cols-2 gap-20">
            <Glow color="#7af67c" opacity={0.2}>
              <div className="listthing">
                <div className="title text-4xl font-bold mb-4">Lorem</div>
                <div className="text text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </Glow>
            <Glow color="#7af67c" opacity={0.2}>
              <div className="listthing">
                <div className="title text-4xl font-bold mb-4">Lorem</div>
                <div className="text text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </Glow>
            <Glow color="#7af67c" opacity={0.2}>
              <div className="listthing">
                <div className="title text-4xl font-bold mb-4">Lorem</div>
                <div className="text text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </Glow>
            <Glow color="#7af67c" opacity={0.2}>
              <div className="listthing">
                <div className="title text-4xl font-bold mb-4">Lorem</div>
                <div className="text text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </Glow>
          </div>
        </GlowCapture>
      </div>
    </div>
  )
}

export default Testing