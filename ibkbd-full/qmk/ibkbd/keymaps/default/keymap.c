// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /**/[0]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_Q        ,/**/KC_W        ,/**/KC_E        ,/**/KC_R        ,/**/KC_T      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_Y      ,/**/KC_U        ,/**/KC_I        ,/**/KC_O        ,/**/KC_P           ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/LGUI_T(KC_A),/**/LALT_T(KC_S),/**/LCTL_T(KC_D),/**/LSFT_T(KC_F),/**/KC_G      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_H      ,/**/RSFT_T(KC_J),/**/RCTL_T(KC_K),/**/LALT_T(KC_L),/**/RGUI_T(KC_SCLN),/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_Z        ,/**/KC_X        ,/**/KC_C        ,/**/KC_V        ,/**/KC_B      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_N      ,/**/KC_M        ,/**/KC_COMM     ,/**/KC_DOT      ,/**/KC_SLSH        ,/**/KC_NO     ,/**/
    /**/KC_ENT      ,/**/LT(6,KC_SPC),/**/KC_NO       ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/KC_NO       ,/**/LT(4,KC_BSPC)  ,/**/KC_DEL    ,/**/
    /**/             /**/             /**/LT(3,KC_TAB),/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/LT(5,KC_ESC) /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[1]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_ESC      ,/**/KC_1        ,/**/KC_2        ,/**/KC_3        ,/**/KC_4        ,/**/KC_5      ,/**/           /*||*/         /**/KC_6      ,/**/KC_7        ,/**/KC_8        ,/**/KC_9        ,/**/KC_0           ,/**/KC_BSPC   ,/**/
    /**/KC_TAB      ,/**/KC_Q        ,/**/KC_W        ,/**/KC_E        ,/**/KC_R        ,/**/KC_T      ,/**/KC_MNXT   ,/*||*/KC_VOLU ,/**/KC_Y      ,/**/KC_U        ,/**/KC_I        ,/**/KC_O        ,/**/KC_P           ,/**/KC_LALT   ,/**/
    /**/KC_LSFT     ,/**/LSFT_T(KC_A),/**/KC_S        ,/**/KC_D        ,/**/KC_F        ,/**/KC_G      ,/**/KC_MPLY   ,/*||*/KC_MUTE ,/**/KC_H      ,/**/KC_J        ,/**/KC_K        ,/**/KC_L        ,/**/KC_SCLN        ,/**/KC_RSFT   ,/**/
    /**/KC_LCTL     ,/**/KC_Z        ,/**/KC_X        ,/**/KC_C        ,/**/KC_V        ,/**/KC_B      ,/**/KC_MPRV   ,/*||*/KC_VOLD ,/**/KC_N      ,/**/KC_M        ,/**/KC_COMM     ,/**/KC_DOT      ,/**/KC_SLSH        ,/**/KC_RCTL   ,/**/
    /**/KC_ENT      ,/**/KC_SPC      ,/**/KC_RBRC     ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/MO(4)       ,/**/KC_BSPC        ,/**/KC_DEL    ,/**/
    /**/             /**/             /**/MO(3)       ,/**/KC_LBRC     ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/MO(6)       ,/**/MO(5)        /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[2]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_ESC      ,/**/KC_1        ,/**/KC_2        ,/**/KC_3        ,/**/KC_4        ,/**/KC_5      ,/**/           /*||*/         /**/KC_6      ,/**/KC_7        ,/**/KC_8        ,/**/KC_9        ,/**/KC_0           ,/**/KC_BSPC   ,/**/
    /**/KC_TAB      ,/**/KC_TAB      ,/**/KC_Q        ,/**/KC_W        ,/**/KC_E        ,/**/KC_R      ,/**/KC_T      ,/*||*/KC_VOLU ,/**/KC_Y      ,/**/KC_U        ,/**/KC_I        ,/**/KC_O        ,/**/KC_P           ,/**/KC_LALT   ,/**/
    /**/KC_LSFT     ,/**/KC_LSFT     ,/**/KC_A        ,/**/KC_S        ,/**/KC_D        ,/**/KC_F      ,/**/KC_G      ,/*||*/KC_VOLD ,/**/KC_H      ,/**/KC_J        ,/**/KC_K        ,/**/KC_L        ,/**/KC_SCLN        ,/**/KC_RSFT   ,/**/
    /**/KC_LCTL     ,/**/KC_LCTL     ,/**/KC_Z        ,/**/KC_X        ,/**/KC_C        ,/**/KC_V      ,/**/KC_B      ,/*||*/KC_MPLY ,/**/KC_N      ,/**/KC_M        ,/**/KC_COMM     ,/**/KC_DOT      ,/**/KC_SLSH        ,/**/KC_RCTL   ,/**/
    /**/KC_ENT      ,/**/KC_SPC      ,/**/KC_RBRC     ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/MO(4)       ,/**/KC_BSPC        ,/**/KC_DEL    ,/**/
    /**/             /**/             /**/MO(3)       ,/**/KC_LBRC     ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/MO(6)       ,/**/MO(5)        /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[3]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_TAB      ,/**/KC_WBAK     ,/**/KC_WFWD     ,/**/KC_WREF     ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_WH_L   ,/**/KC_WH_D     ,/**/KC_WH_U     ,/**/KC_WH_R     ,/**/KC_ACL0        ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_LGUI     ,/**/KC_LALT     ,/**/KC_LCTL     ,/**/KC_LSFT     ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_LEFT   ,/**/KC_DOWN     ,/**/KC_UP       ,/**/KC_RGHT     ,/**/KC_ACL1        ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_HOME     ,/**/KC_PGDN     ,/**/KC_PGUP     ,/**/KC_END      ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_MS_L   ,/**/KC_MS_D     ,/**/KC_MS_U     ,/**/KC_MS_R     ,/**/KC_ACL2        ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/KC_NO       ,/**/KC_BTN1        ,/**/KC_BTN3   ,/**/
    /**/             /**/             /**/KC_TRNS     ,/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/KC_BTN2      /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[4]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_1        ,/**/KC_2        ,/**/KC_3        ,/**/KC_4        ,/**/KC_5      ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_6      ,/**/KC_7        ,/**/KC_8        ,/**/KC_9        ,/**/KC_0           ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_LGUI     ,/**/KC_LALT     ,/**/KC_LCTL     ,/**/KC_LSFT     ,/**/KC_F11    ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_F12    ,/**/KC_RSFT     ,/**/KC_RCTL     ,/**/KC_LALT     ,/**/KC_LGUI        ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_F1       ,/**/KC_F2       ,/**/KC_F3       ,/**/KC_F4       ,/**/KC_F5     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_F6     ,/**/KC_F7       ,/**/KC_F8       ,/**/KC_F9       ,/**/KC_F10         ,/**/KC_NO     ,/**/
    /**/KC_ENT      ,/**/KC_SPC      ,/**/KC_NO       ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/KC_NO       ,/**/KC_TRNS        ,/**/KC_NO     ,/**/
    /**/             /**/             /**/KC_BSPC     ,/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/KC_NO        /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[5]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_EXLM     ,/**/KC_AT       ,/**/KC_HASH     ,/**/KC_DLR      ,/**/KC_PERC   ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_CIRC   ,/**/KC_AMPR     ,/**/KC_ASTR     ,/**/KC_MINS     ,/**/KC_EQL         ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_LGUI     ,/**/KC_LALT     ,/**/KC_LCTL     ,/**/KC_LSFT     ,/**/KC_LPRN   ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_RPRN   ,/**/KC_RSFT     ,/**/KC_RCTL     ,/**/KC_LALT     ,/**/KC_LGUI        ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_QUOT     ,/**/KC_DQUO     ,/**/KC_PIPE     ,/**/KC_LBRC     ,/**/KC_LCBR   ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_RCBR   ,/**/KC_RBRC     ,/**/KC_BSLS     ,/**/KC_UNDS     ,/**/KC_PLUS        ,/**/KC_NO     ,/**/
    /**/KC_ENT      ,/**/KC_SPC      ,/**/KC_NO       ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/KC_NO       ,/**/KC_GRV         ,/**/KC_TILD   ,/**/
    /**/             /**/             /**/KC_BSPC     ,/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/KC_TRNS      /**/                /**/           /**/
    /**/)           ,/**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/

    /**/[6]=LAYOUT(  /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
    /**/QK_BOOT     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/           /*||*/         /**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/TG(1)     ,/**/
    /**/KC_NO       ,/**/QK_BOOT     ,/**/KC_INS      ,/**/KC_SCRL     ,/**/KC_PAUS     ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_NO     ,/**/KC_VOLD     ,/**/KC_MUTE     ,/**/KC_VOLU     ,/**/KC_NO          ,/**/TG(2)     ,/**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_APP      ,/**/KC_CAPS     ,/**/KC_PSCR     ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_NO     ,/**/KC_MPRV     ,/**/KC_MPLY     ,/**/KC_MNXT     ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO     ,/**/KC_NO     ,/*||*/KC_NO   ,/**/KC_NO     ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO       ,/**/KC_NO          ,/**/KC_NO     ,/**/
    /**/KC_NO       ,/**/KC_TRNS     ,/**/KC_NO       ,/**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/KC_NO       ,/**/KC_ESC         ,/**/KC_NO     ,/**/
    /**/             /**/             /**/KC_NO       ,/**/KC_NO       ,/**/             /**/           /**/           /*||*/         /**/           /**/             /**/KC_NO       ,/**/KC_NO        /**/                /**/           /**/
    /**/)            /**/             /**/             /**/             /**/             /**/           /**/           /*||*/         /**/           /**/             /**/             /**/             /**/                /**/           /**/
};
