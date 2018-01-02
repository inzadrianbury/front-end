import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class ToolAssembly {
  tool_number: string;
  tool_type: string;
  tool_size?: string;

  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new ToolAssembly();
    }

    return {
      spindle_name: new FormControl(loadModel.tool_number, Validators.required),
      tool_type: new FormControl(loadModel.tool_type, Validators.required),
      tool_size: new FormControl(loadModel.tool_size, Validators.required),
    };
  }
}
