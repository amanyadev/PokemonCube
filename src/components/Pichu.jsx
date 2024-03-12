/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Pichu/output/anim.gltf -o src/components/Pichu.jsx -r public 
*/

import React, { useRef,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Pichu(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Pichu/output/anim.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
   actions["animation_0"].reset().fadeIn(0.5).play();
   return () => actions["animations_0"].fadeOut(0.5).play();
  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Y_UP">
          <group name="Pichu" rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
            <group name="Origin">
              <group name="Waist" position={[0, 0.044, -0.012]} rotation={[-0.05, 0, Math.PI / 2]}>
                <primitive object={nodes.Spine} />
                <primitive object={nodes.Hips} />
              </group>
            </group>
          </group>
          <skinnedMesh name="Object_0" geometry={nodes.Object_0.geometry} material={materials.Mouth} skeleton={nodes.Object_0.skeleton} />
          <skinnedMesh name="Object_1" geometry={nodes.Object_1.geometry} material={materials.BodyA} skeleton={nodes.Object_1.skeleton} />
          <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.Eye} skeleton={nodes.Object_2.skeleton} />
          <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials.BodyB} skeleton={nodes.Object_3.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Pichu/output/anim.gltf')