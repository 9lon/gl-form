# 9lon/gl-form
Element for [9lon](https://github.com/9lon).

## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/edge/edge_48x48.png) |
--- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ |

## Installing
Using bower:

```bash
$ bower install glon/gl-form
```
#gl-form-label-input , gl-form-label-textarea
## Attributes for Components
![gl-form-label](http://i.imgur.com/z85U3Fn.png)
- label การกำหนดชื่อให้กับ Input นั้น เช่น กรอก Username Name เป็นต้น
- value การกำหนดค่าให้กับ Input เช่น test 1234
```bash
<gl-form-label-input label="label" value="value"></gl-form-label-input>
<gl-form-label-textarea label="label" value="value"></gl-form-label-textarea>
```
#gl-form-input , gl-form-textarea
![gl-form-input](http://i.imgur.com/JKBJjpK.png)
![gl-form-input](http://i.imgur.com/oc0t2gZ.png)

```bash
<gl-form-input label="Input label"></gl-form-input>
<gl-form-textarea label="Input label"></gl-form-textarea>
```

#gl-form-dropdown-menu
![gl-form-dropdown-menu](http://i.imgur.com/PP6SHgd.png)
![gl-form-dropdown-menu](http://i.imgur.com/fm2Xjrt.png)

```bash
<gl-form-dropdown-menu label="ทดสอบ (dropdown menu)" auto-validate required>
  <paper-listbox class="dropdown-content">
      <paper-item rice-type="allosaurus">ตัวอักษร</paper-item>
      <paper-item rice-type="brontosaurus">ขนาด</paper-item>
      <paper-item rice-type="carcharodontosaurus">สี</paper-item>
      <paper-item rice-type="diplodocus">ความถูกต้อง</paper-item>
  </paper-listbox>
</gl-form-dropdown-menu>
```
