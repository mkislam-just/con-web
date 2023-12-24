import React from "react";
import PaperDomainFakeData from '../../../asset/FakeData/PaperDomain.json'
import PaperSubDomainFakeData from '../../../asset/FakeData/PaperSubDomain.json'

function FilesUpload({ formData, setFormData }) {
  return (
    <div className="input-group m-5 d-flex align-items-center border border-secondary p-5 w-auto" >
      <div className="d-flex">

        <strong>Note *</strong><small className="mb-5"> : The following part of the submission form was added by JUSTCN-2023. It has neither been
          checked nor endorsed by EasyChair.</small>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center uploadPaper">
          <label className="mt-3 text-dark me-2"><strong>Upload Paper : </strong></label>
          <input type='file'
            required
            className="form-control w-50"
            onChange={(e) => {
              setFormData({ ...formData, fileURL: e.target.files[0] })
              console.log('fileeeeeeeeeeeeeeeeee', formData);
            }} />
        </div>
        <div>
          <div className="d-flex align-items-center">
            <label className="mt-3 text-dark me-2"><strong>Paper Domain : </strong></label>
            <select id="paperDomain" class="form-select w-50" aria-label="Default select example"
              onChange={(e) => {
                var strUser = document.getElementById("paperDomain").value;

                setFormData({ ...formData, paperDomain: strUser })
                console.log('2111111111111111111111', formData);
              }}
            >
              <option selected>Open this select menu</option>
              {
                PaperDomainFakeData.map(domain => <option key={domain.id} value={domain.field}>{domain.field}</option>)
              }
            </select>

          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <label className="mt-3 text-dark me-2"><strong>subDomain : </strong></label>
            <select id="paperDomain" class="form-select w-50" aria-label="Default select example">
              <option selected>Open this select menu</option>
              {
                PaperSubDomainFakeData.map(domain => <option key={domain.id} value={domain.field}>{domain.field}</option>)
              }
            </select>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FilesUpload;
