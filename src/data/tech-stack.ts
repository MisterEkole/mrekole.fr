export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: 'Languages',
    items: ['C++17', 'Rust', 'Python', 'Metal Shading Language', 'MATLAB'],
  },
  {
    name: 'Vision & SLAM',
    items: ['Visual-Inertial Odometry', 'Visual SLAM', 'Sensor Fusion', 'Stereo Vision', 'Camera Calibration', '6-DoF Pose Estimation'],
  },
  {
    name: 'ML & Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Detectron2', 'MLX', 'LightGBM'],
  },
  {
    name: 'Libraries & Tools',
    items: ['OpenCV', 'Eigen3', 'Ceres Solver', 'ROS2', 'Pangolin', 'CMake', 'Docker'],
  },
  {
    name: 'GPU & Compute',
    items: ['Metal Compute Shaders', 'NVIDIA Jetson', 'GPU Acceleration', 'Zero-Copy Memory'],
  },
  {
    name: 'Platforms',
    items: ['Apple Silicon', 'Linux', 'Azure ML', 'GCP', 'SCADA'],
  },
];
