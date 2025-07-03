import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/core/FormInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataCategory } from "@/helper/dataCategory";
import { Textarea } from "@/components/ui/textarea";

interface IUpdateArticleDialogProps {
  data: any;
}

const UpdateArticleDialog: React.FunctionComponent<
  IUpdateArticleDialogProps
> = (props) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Article</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div>
            <FormInput
              type="text"
              name="title"
              label="Title"
              defaultValue={props.data?.title}
            />
            <FormInput
              type="text"
              name="thumbnail"
              label="Thumbnail"
              defaultValue={props.data?.thumbnail}
            />
            <div id="category">
              <label className="mb-2 font-medium">Category</label>
              <Select defaultValue={props.data?.category}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {dataCategory.map((val: string) => {
                    return (
                      <SelectItem key={val} value={val}>
                        {val}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div id="content">
              <label className="mb-2 font-medium">Content</label>
              <Textarea defaultValue={props.data?.content} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateArticleDialog;
