// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /**/[0]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_Q        ,/**/KC_W        ,/**/KC_E        ,/**/KC_R        ,/**/KC_T      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_Y      ,/**/KC_U        ,/**/KC_I        ,/**/KC_O        ,/**/KC_P           ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/LGUI_T(KC_A),/**/LALT_T(KC_S),/**/LCTL_T(KC_D),/**/LSFT_T(KC_F),/**/KC_G      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_H      ,/**/RSFT_T(KC_J),/**/RCTL_T(KC_K),/**/LALT_T(KC_L),/**/RGUI_T(KC_SCLN),/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_Z        ,/**/KC_X        ,/**/KC_C        ,/**/KC_V        ,/**/KC_B      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_N      ,/**/KC_M        ,/**/KC_COMM     ,/**/KC_DOT      ,/**/KC_SLSH        ,/**/KC_NO     ,/**/
    /**/KC_ENT      ,/**/LT(6,KC_SPC),/**/KC_NO       ,/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO        /**/KC_NO       ,/**/LT(4,KC_BSPC)  ,/**/KC_DEL    ,/**/
    /**/             /**/LT(3,KC_TAB),/**/             /**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/             /**/LT(5,KC_ESC)    /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
};
