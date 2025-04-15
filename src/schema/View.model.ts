import mongoose, { Schema } from "mongoose";
import { ViewGroup } from "../libs/enums/view.enum";

const viewSchema = new Schema(
    {
        ViewGroup: {
            type: String,
            enum: ViewGroup,
           // required: true, // Bu kiritilishi kerak bo'lgan malumot
        },

        memberId: {
            type: Schema.Types.ObjectId,
            required:true,
            ref: "Member" // Bu membercollectionga dahildor
        },

        viewRefId: {
            type: Schema.Types.ObjectId,
            required:true
        },
    },
    {timestamps: true}
)

export default mongoose.model("View", viewSchema);
