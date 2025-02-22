<script lang="ts">
    // Define the prop types
    export let href: string = "#"; // Default to "#" if not provided
    export let text: string = "Click Me"; // Default text
    export let color: string = "bg-green-400"; // Default background color
    export let hoverColor: string = "hover:bg-green-500"; // Default hover color
</script>


<a href={href}
    class="px-6 py-3 text-lg font-bold text-white border-4 border-black rounded-full shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95 {color} {hoverColor}">
    {text}
</a>
