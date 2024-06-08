// These should make typing MeshRefs across the project easier
type InitialMeshRef = React.MutableRefObject<import("three").Mesh | undefined>;
type AssignedMeshRef = React.MutableRefObject<import("three").Mesh>;
type InitialGroupRef = React.MutableRefObject<import("three").Group | undefined>;
type AssignedGroupRef = React.MutableRefObject<import("three").Group>;
// NOTE - https://github.com/pmndrs/drei/issues/469#issuecomment-897539047
type DreiGLTF = import("three-stdlib").GLTF & {
  // NOTE - Making this a "Record" so that it can be used as a dictionary without a TypeScript issue (e.g. using "geometry" in nodes.Object_7.geometry)
  nodes: Record<string, import("three").SkinnedMesh>;
  materials: Record<string, import("three").Material>;
};