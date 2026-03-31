export interface FeaturedProject {
  name: string;
  repo: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'vio-metal',
    repo: 'MisterEkole/vio-metal',
    description:
      'End-to-end visual-inertial odometry system estimating 6-DoF pose in real-time by fusing stereo cameras with an IMU. Features both CPU baseline and GPU-accelerated pipeline using custom Metal compute kernels.',
    techStack: ['C++17', 'Metal', 'Ceres Solver', 'CMake'],
    highlights: [
      'IMU preintegration with bias Jacobians',
      '6 custom Metal compute shaders',
      'GPU reduces worst-case latency by 1.8x',
    ],
  },
  {
    name: 'vx-rs',
    repo: 'MisterEkole/vx-rs',
    description:
      'Safe Rust library wrapping Metal compute shaders for classical computer vision algorithms. Designed for onboard robotics pipelines with zero-copy and no heap allocations in hot paths.',
    techStack: ['Rust', 'Metal', 'GPU Compute'],
    highlights: [
      'Zero unsafe code in user-facing API',
      'Compile-time GPU/CPU access safety via ownership',
      '8 Metal compute shaders for CV primitives',
    ],
  },
  {
    name: 'mlx-rs',
    repo: 'MisterEkole/mlx-rs',
    description:
      'Safe, ergonomic Rust bindings for Apple\'s MLX array framework, enabling ML workloads on Apple Silicon without Python. Includes optional Apple Neural Engine offload.',
    techStack: ['Rust', 'Objective-C FFI', 'Metal', 'ANE'],
    highlights: [
      'MLP training 2.1x faster than Python MLX',
      'ANE inference 1.51x faster than GPU',
      '~81,000 LOC across 87 Rust files',
    ],
  },
  {
    name: 'autoproof',
    repo: 'MisterEkole/autoproof',
    description:
      'AI agent exploring proof spaces for open mathematical problems using Monte Carlo Tree Search with LLM-based proof generation and dual formal/informal verification.',
    techStack: ['Python', 'Lean 4', 'Anthropic API', 'MLX'],
    highlights: [
      'UCB1 node selection with geometric backpropagation',
      'Dual verification: Lean 4 formal + LLM informal',
      'Applied to Navier-Stokes problem exploration',
    ],
  },
  {
    name: 'chisel',
    repo: 'MisterEkole/chisel',
    description:
      '3D scene reconstruction from unordered images with Transformer-based matching for robust multi-view geometry.',
    techStack: ['Python', 'PyTorch', 'Transformers'],
    highlights: [
      'Transformer-based feature matching',
      'Unordered image set reconstruction',
      'Multi-view geometry pipeline',
    ],
  },
];
