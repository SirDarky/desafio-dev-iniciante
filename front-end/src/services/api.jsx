import axios from "axios";
import { linkLocal } from "./constantes";

const api = axios.create({
    baseURL:linkLocal,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.NjQ3NmZkYTJmNTM5NDQ2Y2VlMDlkMTc1.Ah-h1gDULGJmSHJLPtFUczAAVAYHSOAJdXSSXYlJX9Q'
      }
})

export default api