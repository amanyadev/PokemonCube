import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Bulbasaur(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Bulbasaur/output/anim.gltf')
  const { actions } = useAnimations(animations, group)
  //console.log(actions);
  useEffect(() => {
    actions["animation_0"].reset().fadeIn(0.5).play();
    return () => actions["animations_0"].fadeOut(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Y_UP">
          <group name="Fushigidane" rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
            <group name="Origin">
              <group name="Waist" position={[0, 0.178, 0.143]} rotation={[-1.326, 0, Math.PI / 2]}>
                <primitive object={nodes.Spine1} />
                <primitive object={nodes.Hips} />
              </group>
            </group>
          </group>
          <skinnedMesh name="Object_0" geometry={nodes.Object_0.geometry} material={materials.BodyA} skeleton={nodes.Object_0.skeleton} />
          <skinnedMesh name="Object_1" geometry={nodes.Object_1.geometry} material={materials.BodyB} skeleton={nodes.Object_1.skeleton} />
          <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.Eye} skeleton={nodes.Object_2.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Bulbasaur/output/anim.gltf')
