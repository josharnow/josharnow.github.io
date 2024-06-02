// These should make typing MeshRefs across the project easier
type InitialMeshRef = React.MutableRefObject<import("three").Mesh | undefined>;
type AssignedMeshRef = React.MutableRefObject<import("three").Mesh>;