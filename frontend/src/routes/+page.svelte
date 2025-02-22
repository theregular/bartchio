<script>
	import CartoonLink from "./CartoonLink.svelte";

</script>
<h1 class="text-4xl font-bold text-center text-black">Bartchie</h1>

<div class="flex flex-wrap justify-center gap-4 mt-6">

    <CartoonLink href="https://open.spotify.com/artist/4Gyqu8c5JuthBEudrUY0dE?si=Qu_QBl3yTnuY75ywWs9JLA" text="Spotify" color="bg-green-400" hoverColor="hover:bg-green-500"/>
    <CartoonLink href="https://soundcloud.com/bartchie" text="Soundcloud" color="bg-orange-400" hoverColor="hover:bg-orange-500"/>
    <CartoonLink href="https://music.apple.com/us/artist/bartchie/1717498972" text="Apple Music" color="bg-red-400" hoverColor="hover:bg-red-500"/>
    <CartoonLink href="https://www.youtube.com/@bartchie" text="Youtube" color="bg-red-600" hoverColor="hover:bg-red-700"/>
    <CartoonLink href="https://www.instagram.com/bartchie" text="Instagram" color="bg-pink-400" hoverColor="hover:bg-pink-500"/>
</div>
