import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import gspa from "gsap";
import { useGSAP } from "@gsap/react";

const FroggyPie = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/froggie_pie_by_lemonscribs.glb')

   useGSAP(() => {
    gspa.to(group.current.position, {
      y: group.current.position.y + 1,
      x: group.current.position.x + 1,
      duration: 1.9,
      repeat: -1,
      yoyo: true,
    });
  });
  
  return (
    <Float {...props} dispose={null} ref={group} floatIntensity={20}>
      <group
        position={[0.592, -0.031, -3.163]}
        rotation={[-0.781, 0.444, -0.135]}
        scale={[0.05, 0.325, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Lily_Pad_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Frog_Outline}
        />
      </group>
      <group
        position={[0.433, -0.02, -3.277]}
        rotation={[-0.708, 0.566, -0.286]}
        scale={[0.048, 0.312, 0.048]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Lily_Pad_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Frog_Outline}
        />
      </group>
      <group position={[0.074, -0.693, -3.081]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Inner_Bubble}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Outer_Bubbles}
        />
      </group>
      <group
        position={[0.531, 0.319, -3.478]}
        rotation={[0.18, -0.021, -0.084]}
        scale={[0.326, 0.148, 0.347]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Lily_Pad_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Ripples_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Frog_Shadow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Pie_Outline}
        />
      </group>
      <group
        position={[0.835, 0.611, -3.944]}
        rotation={[0.409, 0, 0]}
        scale={[0.384, 0.154, 0.384]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Pie_Outline}
        />
      </group>
      <group position={[0.438, 0.458, -3.516]} scale={0.123}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Lily_Pad_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.Pie_Outline}
        />
      </group>
      <group position={[0.644, 0.433, -3.395]} scale={0.123}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.Lily_Pad_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Pie_Outline}
        />
      </group>
      <group position={[0, -1.112, -3.504]} rotation={[0.328, 0.404, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Pie_Front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.Pie_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Pie_Back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.Ripples}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.Rim_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Lily_Pad_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.Lily_Pad_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Lily_Pad_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.Shadow_Ripples}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Shine}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.Pie_Outline_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Pie_Outline}
        />
      </group>
      <group
        position={[-1.216, 0.743, -1.883]}
        rotation={[0, 0, -0.513]}
        scale={[0.039, 0.05, 0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Lily_Pad_1}
        />
        <group
          position={[3.971, -2.114, -0.259]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.076, 2.682, 1.629]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.Lily_Pad_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.Inner_Line_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.Lily_Pad_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.Pie_Outline_3}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.Inner_Line_2}
        position={[0.672, 0.357, -3.209]}
        rotation={[-0.242, 0, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.Inner_Line_2}
        position={[0.322, 0.402, -3.301]}
        rotation={[-1.003, -0.89, -1.022]}
        scale={0.618}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.Lily_Pad_3}
        position={[-0.014, 0.009, -3.154]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.Inner_Line}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.Pie_Outline_3}
        position={[0.629, 0.462, -3.281]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.Pie_Outline_3}
        position={[0.4, 0.491, -3.403]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.material_13}
        position={[0.23, -0.453, -3.633]}
        rotation={[0.529, -0.865, 0.14]}
        scale={[0.964, 0.498, 0.938]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.Fork}
        position={[-1.562, 0.168, -2.066]}
        rotation={[-Math.PI, 0, -2.6]}
        scale={[0.062, 1.002, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Background}
        position={[-1.562, 0.168, -2.154]}
        rotation={[-Math.PI, 0, -2.6]}
        scale={[0.062, 1.021, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.Background2}
        position={[-1.562, 0.168, -2.274]}
        rotation={[-Math.PI, 0, -2.6]}
        scale={[0.073, 1.08, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.Inner_Line}
        position={[-0.063, -0.761, -3.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials.Pie_Outline_3}
        position={[0.492, 0.397, -3.239]}
        rotation={[1.039, -0.185, 0.107]}
        scale={[0.033, 0.046, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_73.geometry}
        material={materials.Outer_Bubbles}
        position={[0.257, -0.444, -3.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_75.geometry}
        material={materials.Background2}
        position={[0.17, 0, -5.611]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.175}
      />
    </Float>
  )
}

useGLTF.preload('models/froggie_pie_by_lemonscribs.glb')
export default FroggyPie