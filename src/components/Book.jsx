import * as THREE from 'three'
import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Book = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/medieval_fantasy_book.glb')
  const { actions } = useAnimations(animations, group)

useEffect(() => {
  Object.values(actions).forEach((action) => {
    action.reset().fadeIn(0.5).play();
  });
}, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'Sketchfab_model' }}>
          <group
            name="dad255dd2cf24ae0bb357684e49722b4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'dad255dd2cf24ae0bb357684e49722b4.fbx' }}>
            <group name="Object_2" userData={{ name: 'Object_2' }}>
              <group name="RootNode" userData={{ name: 'RootNode' }}>
                <group
                  name="Scene"
                  position={[-4.794, 0, 0.278]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: 'Scene' }}>
                  <group
                    name="Object_5"
                    position={[-14, 15.788, 4.337]}
                    userData={{ name: 'Object_5' }}>
                    <mesh
                      name="Scene_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                      userData={{ name: 'Scene_Texture-base_0' }}
                    />
                    <mesh
                      name="Scene_Texture-base_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0_1'].geometry}
                      material={materials['Texture-base']}
                      userData={{ name: 'Scene_Texture-base_0' }}
                    />
                    <mesh
                      name="Scene_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base-gloss-jpg_0'].geometry}
                      material={materials['Texture-base-gloss-jpg']}
                      userData={{ name: 'Scene_Texture-base-gloss-jpg_0' }}
                    />
                    <mesh
                      name="Scene_Book-tittle_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Book-tittle_0'].geometry}
                      material={materials['Book-tittle']}
                      userData={{ name: 'Scene_Book-tittle_0' }}
                    />
                  </group>
                  <group
                    name="Mill-wind-wheel"
                    position={[-35.783, -27.192, 3.888]}
                    rotation={[0.445, -0.447, -0.498]}
                    userData={{ name: 'Mill-wind-wheel' }}>
                    <group
                      name="Object_11"
                      position={[-8.253, 39.884, -25.75]}
                      rotation={[-0.607, 0.138, 0.644]}
                      userData={{ name: 'Object_11' }}>
                      <mesh
                        name="Mill-wind-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Mill-wind-wheel_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                        userData={{ name: 'Mill-wind-wheel_Texture-base_0' }}
                      />
                    </group>
                  </group>
                  <group
                    name="Mill-water-wheel"
                    position={[3.708, -15.395, -0.444]}
                    rotation={[-1.92, 0, 0]}
                    userData={{ name: 'Mill-water-wheel' }}>
                    <group
                      name="Object_14"
                      position={[-17.708, 31.183, 4.781]}
                      userData={{ name: 'Object_14' }}>
                      <mesh
                        name="Mill-water-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Mill-water-wheel_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                        userData={{ name: 'Mill-water-wheel_Texture-base_0' }}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="flag"
                  position={[-11.513, 12.497, -6.752]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                  userData={{ name: 'flag' }}>
                  <group
                    name="Object_17"
                    position={[-7.262, 9.035, -8.16]}
                    userData={{ name: 'Object_17' }}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                      userData={{ name: '0' }}
                    />
                  </group>
                </group>
                <group
                  name="flag-second"
                  position={[-11.494, 12.552, -26.245]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: 'flag-second' }}>
                  <group
                    name="Object_20"
                    position={[-7.262, 9.035, -8.16]}
                    userData={{ name: 'Object_20' }}>
                    <mesh
                      name="1"
                      castShadow
                      receiveShadow
                      geometry={nodes['1'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['1'].morphTargetDictionary}
                      morphTargetInfluences={nodes['1'].morphTargetInfluences}
                      userData={{ name: '1' }}
                    />
                  </group>
                </group>
                <group
                  name="Waterfall"
                  position={[-4.794, 0, 0.351]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: 'Waterfall' }}>
                  <group
                    name="Object_23"
                    position={[-14, 15.788, 4.337]}
                    userData={{ name: 'Object_23' }}>
                    <mesh
                      name="Waterfall_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry}
                      material={materials['Texture-base-gloss-jpg']}
                      userData={{ name: 'Waterfall_Texture-base-gloss-jpg_0' }}
                    />
                  </group>
                </group>
                <group
                  name="deers"
                  position={[-23.122, -0.049, 14.878]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: 'deers' }}>
                  <group
                    name="Object_26"
                    position={[4.328, 30.387, 4.387]}
                    userData={{ name: 'Object_26' }}>
                    <mesh
                      name="deers_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['deers_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                      userData={{ name: 'deers_Texture-base_0' }}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('models/medieval_fantasy_book.glb')
export default Book;
