import { useParams } from "react-router-dom";

const TaskDetailPage = () => {
  const { sectionId, focalId, idx } = useParams();
  return (
    <div>
      <h2>Task Detail</h2>
      <p>Section: {sectionId}</p>
      <p>Focal: {focalId}</p>
      <p>Document Index: {idx}</p>
    </div>
  );
};

export default TaskDetailPage;
