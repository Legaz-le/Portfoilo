import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Mushroom = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/mushroom_potion.glb')
  return (
    <Float  floatIntensity={1}  ref={group}>
      <group scale={0.01} {...props} >
        <mesh
          
          geometry={nodes.Base_2_Mushroom_0.geometry}
          material={materials.Mushroom}
          position={[0, 29.931, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Mushroom_0.geometry}
          material={materials.Mushroom}
          position={[76.283, 78.17, -109.317]}
          rotation={[-1.068, -0.306, 3.05]}
          scale={318.781}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Star_Mushroom_0.geometry}
          material={materials.Mushroom}
          position={[242.447, 578.185, 112.279]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mushroom_2_Mushroom_0.geometry}
          material={materials.Mushroom}
          position={[30.784, 220.34, -52.657]}
          rotation={[-Math.PI / 2, 0, 2.775]}
          scale={100.741}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/mushroom_potion.glb')
export default  Mushroom;