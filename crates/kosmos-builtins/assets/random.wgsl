const TAUS1_S1: u32 = 13u;
const TAUS1_S2: u32 = 19u;
const TAUS1_S3: u32 = 12u;
const TAUS1_M: u32 = 4294967294u;

const TAUS2_S1: u32 = 2u;
const TAUS2_S2: u32 = 25u;
const TAUS2_S3: u32 = 4u;
const TAUS2_M: u32 = 4294967288u;

const TAUS3_S1: u32 = 3u;
const TAUS3_S2: u32 = 11u;
const TAUS3_S3: u32 = 17u;
const TAUS3_M: u32 = 4294967280u;

fn random_taus(z: ptr<private, u32>, S1: u32, S2: u32, S3: u32, M: u32) -> u32 {
	let b: u32 = (((*z << S1) ^ *z) >> S2);
	*z = (((*z & M) << S3) ^ b);
	return *z;
}

const LCG_A: u32 = 1664525u;
const LCG_C: u32 = 1013904223u;

fn random_lcg(z: ptr<private, u32>, A: u32, C: u32) -> u32 {
	*z = (A * *z + C);
	return *z;
}

var<private> z1: u32;
var<private> z2: u32;
var<private> z3: u32;
var<private> z4: u32;

fn set_seed(seed: u32) {
	z1 = seed;
	z2 = seed;
	z3 = seed;
	z4 = seed;
}

fn set_seed_from_ids(
	local_id: vec3<u32>,
	global_id: u32,
	global_invocation_id: vec3<u32>
) {
	set_seed(local_id[0] * global_id * global_invocation_id[0]);
}

fn rand() -> f32 {
	return 2.3283064365387e-10 * f32(
		random_taus(&z1, TAUS1_S1, TAUS1_S2, TAUS1_S3, TAUS1_M) ^
		random_taus(&z2, TAUS2_S1, TAUS2_S2, TAUS2_S3, TAUS2_M) ^
		random_taus(&z3, TAUS3_S1, TAUS3_S2, TAUS3_S3, TAUS3_M) ^
		random_lcg(&z4, LCG_A, LCG_C)
	);
}

var<private> z_fast: f32 = 0.0;

fn rand_fast() -> f32 {
	z_fast = fract(sin(z_fast) * 69.0); // haha funny number
	return z_fast;
}
