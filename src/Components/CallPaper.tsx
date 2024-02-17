import { Button } from "@nextui-org/react"




const CallPaper = () => {
  return (
    <div id="callpaper" className="flex flex-col justify-center items-center w-full">
        <h1 className="font-medium text-5xl my-12 develus">CALL FOR PAPERS</h1>
        <div className="flex flex-col justify-center items-center container p-4 text-gray-400">
            <q className="text-lg w-[85%] text-justify">Prospective authors are kindly encouraged to contribute to and help shape the conference through submissions of their research abstracts, extended abstract or papers. Submissions should contain original unpublished results which demonstrate recent advances in any topic related to the fields of interest.
            </q>
            <div className="flex flex-row justify-center items-center flex-wrap">
                <div className=" rounded-xl p-5 m-4 flex flex-col justify-start items-start max-w-[500px] min-h-[200px] bg-gray-900">
                    <h1 className="text-xl font-medium my-2  ">Full Abstract Submission </h1>
                    <p className="text-gray-500">Participants are invited to eventually prepare original abstract and unpublished novel manuscripts which demonstrate recent advances in the fields of applied mathematics and data science in their theoretical and practical aspects.</p>
                    <Button className=" text-xl bg-transparent topic text-gray-400 my-3">Download Template</Button>
                </div>
                <div className=" rounded-xl p-5 m-4 flex flex-col justify-start items-start max-w-[500px] min-h-[200px] bg-gray-900">
                    <h1 className="text-xl font-medium my-2  ">Full Abstract Submission </h1>
                    <p className="text-gray-500">Participants are invited to eventually prepare original abstract and unpublished novel manuscripts which demonstrate recent advances in the fields of applied mathematics and data science in their theoretical and practical aspects.</p>
                    <Button className=" text-xl bg-transparent topic text-gray-400 my-3">Download Template</Button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CallPaper