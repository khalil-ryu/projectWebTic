import React from 'react'

export default function Form() {
  return (
    <form class="pa4 black-80">
        <div class="measure">
            <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small>
        </div>
    </form>
  )
}
