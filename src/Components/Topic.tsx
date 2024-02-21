import { Zoom } from "react-awesome-reveal";


const Topic = () => {
    const task1 = [
      "Learning Theory:  Approximation Theory and algorithmic ",
      "Deep Learning Models and Architectures",
      "PDE and Deep Learning",
      "Statistical Analysis and Data Mining for Machine Learning",
      "Computer Vision and Pattern Recognition",
      "Natural Language Processing and Text Mining",
      "Reinforcement Learning and Autonomous Systems"
    ];

    const topic2 = [
        "Mathematical Formulation and Analysis of Inverse Problems",
        "Imaging Reconstruction Techniques",
        "Tomography and Medical Imaging",
        " Seismic Imaging and Geophysical Inverse Problems",
        "Signal Processing and Remote Sensing"
    ];
    const topic3 =  [
        "Optimization Algorithms and Metaheuristic Techniques",
        "Swarm Intelligence and Nature-Inspired Optimization",
        "Evolutionary Computation and Genetic Algorithms",
        "Multi-objective Optimization and Pareto Front Analysis",
        "Optimization for Machine Learning and Data Science"
    ]

    const topi4 = [
        "Mathematical Modeling and Simulation for Complex Systems",
        "Computational Fluid Dynamics and Heat Transfer",
        "Financial Mathematics and Quantitative Finance",
        "Graph Theory and Network Analysis",
        "Game Theory and Decision Making",
        "Cybersecurity and Cryptography",
        "High-Performance Computing and Parallel Processing",
        "Mathematical Biology and Bioinformatics"
    ];


  return (
    <>
        <h1 className=" text-5xl my-12 develus text-center"> {"Topics & subjects ".toUpperCase()} </h1>
    <div id="" className=" flex flex-col justify-center items-center w-full my-6 py-6 ">
      
        <div className=" flex flex-row justify-center items-start flex-wrap">
            <div className="col-1">
                <h1 className="text-gray-500 text-xl font-bold  max-w-[300px] text-center" >Machine Learning and Deep Learning Applications</h1>
                <div className="flex flex-col justify-center items-center">
                    <Zoom cascade damping={0.1}>
                        {task1.map(task => {
                            return (
                                <div key={task.indexOf(task)} className="bg-gray-900 w-[250px] h-[100px] rounded my-1 border-2 border-gray-500">
                                    <h1 className="text-center text-lg text-gray-400 m-auto my-3">
                                        {task}
                                    </h1>
                                </div>
                            )
                        })}
                    </Zoom>
                </div>
            </div>
            <div className="col-1">
                <h1 className="text-gray-500 text-xl max-w-[300px] text-center font-bold"  >Inverse Problems and Computational Imaging</h1>
                <div className="flex flex-col justify-center items-center">
                    <Zoom cascade damping={0.1}>
                        {topic2.map(task => {
                            return (
                                <div className="bg-gray-900 w-[250px] h-[100px] rounded my-1 border-2 border-gray-500">
                                    <h1 className="text-center text-lg text-gray-400 m-auto my-3">
                                        {task}

                                    </h1>
                                </div>
                            )
                        })}
                    </Zoom>
                </div>
            </div>
            <div className="col-1">
                <h1 className="text-gray-500 text-xl font-bold max-w-[300px] text-center"  >Intelligent Optimization and Computational Intelligence</h1>
                <div className="flex flex-col justify-center items-center">
                    <Zoom cascade damping={0.1}>
                        {topic3.map(task => {
                            return (
                                <div className="bg-gray-900  w-[250px] h-[100px] rounded my-1 border-2 border-gray-500">
                                    <h1 className="text-center text-lg text-gray-400 m-auto my-3">
                                        {task}
                                    </h1>
                                </div>
                            )
                        })}
                    </Zoom>
                </div>
            </div>
            <div className="col-1">
                <h1 className="text-gray-500 text-xl font-bold  max-w-[300px] text-center"  > Related Fields and Interdisciplinary Applications</h1>
                <div className="flex flex-col justify-center items-center">
                    <Zoom cascade damping={0.1}>
                        {topi4.map(task => {
                            return (
                                <div className="bg-gray-900 w-[250px] h-[100px] rounded my-1 border-2 border-gray-500">
                                    <h1 className="text-center text-lg text-gray-400 m-auto my-3">
                                        {task}

                                    </h1>
                                </div>
                            )
                        })}
                    </Zoom>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topic