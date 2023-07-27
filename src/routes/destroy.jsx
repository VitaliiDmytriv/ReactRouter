import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    deleteContact(params.contactId);
    return redirect("/");
}
