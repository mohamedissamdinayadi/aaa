import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
    private _show: boolean;
    get show(): boolean {
        return this._show;
    }
    set show(value: boolean) {
        this._show = value;
    }
}
