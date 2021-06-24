export const fontAwsome = (
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
    crossOrigin="anonymous"
  />
);
export const googleFonts = (
  fontName: string,
  fontW1 = 200,
  fontW2 = 400,
): JSX.Element => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href={`https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontW1};${fontW2}`}
      rel="stylesheet"
    />
  </>
);

export const marked = (
  <script
    defer
    src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.1/marked.min.js"
    integrity="sha512-vDOU8ILVjHjOiDqh/68otCA4jVnZWIsvdi3YWtOecp9V4xrKdkmtI+O8ifj84hJtLh28D9kD42lM9rs63p4Grg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
);

export const tailWind = (
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.0.0-359252c/tailwind.min.css"
    integrity="sha512-86Lp9pKSxz4IQNjDI53IJpyANmGud7XbTe3EMy4VPygIkycCo6kp91gNuTpy5RBeDtUCyrlP89GxmIemo4uZew=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
);
