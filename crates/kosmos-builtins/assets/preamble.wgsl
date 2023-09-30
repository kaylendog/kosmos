@compute
@workgroup_size(1)
fn cs_main(
	@builtin(local_invocation_id) id: vec3<u32>,
	@builtin(global_invocation_id) gid: vec3<u32>,
	@builtin(num_workgroups) num_workgroups: vec3<u32>,
) {
	
}
