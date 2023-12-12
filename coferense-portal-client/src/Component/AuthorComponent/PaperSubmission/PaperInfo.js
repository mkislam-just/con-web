import React from "react";

function PaperInfo({ formData, setFormData, wordLimit , setWordLimit , setIsValid, isValid  }) {

  return (
    <div className="w-70 m-auto  authorContainer my-5">
      <div>
        <label className="mt-3 text-dark"><strong>Title : </strong> </label>
        <input
          className='form-control'
          type="text"
          placeholder="Title ...."
          value={formData.title}
          required
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
      </div>
      <div>
        <label className="mt-3 text-dark"><strong>Abstract : </strong> </label>
        <textarea
          className='form-control height'
          id="word"
          type="text"
          placeholder="Abstract...."
          value={formData.abstract}
          onChange={(e) =>{
            setFormData({ ...formData, abstract: e.target.value })
            
            let res = [];
            let str = e.target.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
            str.map((s) => {
              let trimStr = s.trim();
              if (trimStr.length > 0) {
                res.push(trimStr);
              }
            });
            setWordLimit(res.length);
            if(res.length > 250 ){
              setIsValid(false)
              document.querySelector('#textarea_message').innerText= 'max length '+250+' Words only!';
              document.getElementById('word').setAttribute('style' , 'border: 3px solid red')
            }
            else
              {
                setIsValid(true)
                document.getElementById("word").removeAttribute('style' , 'border: 5px solid red');
                document.querySelector('#textarea_message').innerText= '';
              }
          }
          
        }
        />
        <div className={`d-flex justify-content-between ${isValid ? 'text-primary': 'text-danger'} fw-bold`}>
        <p id="show" className="fw-bold">{wordLimit}/250</p>
        <p id="textarea_message"></p>
        </div>
      </div>
      <div>
        <label className="mt-3 text-dark"><strong>Keywords : </strong> </label>
        <input
          className='form-control'
          type="text"
          placeholder="Keywords...."
          value={formData.keywords}
          onChange={(event) =>
            setFormData({ ...formData, keywords: event.target.value })
          }
        />
      </div>

    </div>
  );
}

export default PaperInfo;
