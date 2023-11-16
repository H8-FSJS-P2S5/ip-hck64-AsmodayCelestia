import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function TableRow({title, content, image, id, handleDelete}){
return( 
    <>
                <tr>
                  <td className="text-2xl">{title}</td>
                  <td>
                    <div className="px-2 text-xl">
                      <h3>
                        {content}
                      </h3>
                    </div>
                  </td>
                  <td>
                    <img
                      src={image}
                      alt="Your Name"
                      className="w-[5000px]"
                    />
                  </td>
                  <td>
                    <div className="mt-7 gap-1 flex justify-center mx-7 py-5">
                      <button
                        type="submit"
                        className="btn bg-yellow-400  text-white"
                      >
                        <Link to={`/editNews/${id}`}>Edit News</Link>
                      </button>
                      <button
                        type="submit"
                        className="btn bg-orange-400  text-white"
                      >
                        <Link to={`/editImage/${id}`}>Edit Image</Link>
                      </button>
                      <button
                        onClick={handleDelete}
                        type="submit"
                        className="btn bg-red-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
    </>
)
}