import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Edges, MeshPortalMaterial, CameraControls, Environment,  } from '@react-three/drei'
import { Squirtle } from './components/Squirtle'
import { Bulbasaur } from './components/Bulbasaur'
import { Mew } from './components/Mew'
import { Pichu } from './components/Pichu'

import { Ditto } from './components/Ditto'
import { Charmander } from './components/Charmander'

export const App = () => (
  <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.3, 2.3, 2.3]} />
        <Edges />
        <Side rotation={[0, 0, 0]} bg="orange" index={0}>
        <Charmander scale={2.4} position-y={-1} rotation={[0,Math.PI/2,0]}/>
        </Side>
        <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
          <Squirtle scale={3} position-y={-1} rotation={[0,-Math.PI/2,0]}/>
        </Side>
        <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="lightpink" index={2}>
          <Ditto scale={3} position-y={-1} rotation={[0,-Math.PI/2,0]}/>
        </Side>
        <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
        <Mew scale={2} position-y={-1} rotation={[0,-Math.PI/2,0]}/>
        </Side>
        <Side rotation={[0, -Math.PI / 2, 0]} bg="lightgreen" index={4}>
        <Bulbasaur scale={2} position-y={-1} rotation={[0,0,0]}/>
        </Side>
        <Side rotation={[0, Math.PI / 2, 0]} bg="yellow" index={5}>
        <Pichu scale={2.5} position-y={-1} rotation={[0,Math.PI,0]}/>
        </Side>
      </mesh>
    <CameraControls makeDefault />
  </Canvas>
)

function Side({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }) {
  const mesh = useRef()
  const { nodes } = useGLTF('models/aobox-transformed.glb')
  useFrame((state, delta) => {
  })
  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry} scale={[1.2,1.2,1.2]}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
        <spotLight castShadow color={bg} intensity={2} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  )
}
