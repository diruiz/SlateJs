import React, { useState, useCallback } from 'react';
import { createEditor, Editor, Text, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import Menu from '../Menu/Menu'
import MarkButton from '../MarkButton/MarkButton';
import Icons from '../../Icons/Icons';
import Element from '../Element/Element';
import Leaf from '../Leaf/Leaf';
import { isImageUrl } from '../../Utility/Tools';

function RichTextEditor(props) {

  const [editor] = useState(withReact(createEditor()), [])
  //const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    // Add a toolbar with buttons that call the same methods.
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Menu>
        <MarkButton click={
          event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}>{Icons.Bold}</MarkButton>
        <MarkButton click={
          event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}>{Icons.Italic}</MarkButton>
        <MarkButton click={
          event => {
            event.preventDefault()
            CustomEditor.toggleUnderlineMark(editor)
          }}>{Icons.Underline}</MarkButton>
        <MarkButton click={
          event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}>{Icons.Code}</MarkButton>
        <MarkButton click={
          event => {
            const url = window.prompt('Enter the URL of the image:')
            if (url && !isImageUrl(url)) {
              alert('URL is not an image')
              return
            }
            //insertImage(editor, url)
          }}>{Icons.Image}</MarkButton>
        <MarkButton click={
          event => {
            event.preventDefault()
            console.log(value);
            localStorage.setItem('content', JSON.stringify(value));
            alert("the content is saved in the local storage");
          }}>{Icons.Save}</MarkButton>
      </Menu>
      <Editable
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          console.log(value);
          const content = JSON.stringify(value)
          localStorage.setItem('content', content)
          if (!event.ctrlKey) {
            return
          }

          switch (event.key) {
            case '`': {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
              break
            }

            case 'b': {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }
          }


        }}
      />
    </Slate>
  )
}

export default RichTextEditor;

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },
  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true,
    })

    return !!match
  },

  isUnderlineMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.code === true,
      universal: true,
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },
  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor)
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleUnderlineMark(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor)
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor)
    Transforms.setNodes(
      editor,
      { code: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },
}

