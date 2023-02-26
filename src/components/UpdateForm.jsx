import React from "react";

const UpdateForm = ({ editTask, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control form-control-lg"
            value={editTask && editTask.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-info" onClick={updateTask}>
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
