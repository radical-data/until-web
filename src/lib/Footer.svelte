<script>
	import instagramIcon from '$lib/assets/instagram-icon.svg';
	import tiktokIcon from '$lib/assets/tiktok-icon.svg';
	import twitterIcon from '$lib/assets/twitter-icon.svg';
	import githubIcon from '$lib/assets/github-icon.svg';
    const socialMediaIcons = [
        {
            platform: 'Instagram',
            href: 'https://www.instagram.com/untildatabase',
            src: instagramIcon,
        },
        {
            platform: 'TikTok',
            href: 'https://www.tiktok.com/@untildatabase',
            src: tiktokIcon,
        },
		{
            platform: 'Twitter',
            href: 'https://twitter.com/untildatabase',
            src: twitterIcon,
        },
		{
            platform: 'GitHub',
            href: 'https://github.com/radical-data/until-web',
            src: githubIcon,
        },
    ];
</script>

<footer>
	<div class="footer-content">
		<div class="footer-description">
			<p>
				Until is a community-led database of Palestinians killed in the Israeli assault on Gaza.
			</p>
		</div>
		<div class="social-media">
            {#each socialMediaIcons as icon (icon.platform)}
                <a
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={icon.src} alt={icon.platform} />
                </a>
            {/each}
		</div>
	</div>
</footer>

<style>
	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.social-media {
		display: flex;
		/* gap: 15px; */
	}

	.social-media img {
		width: 20px;
		height: 20px;
		padding: 10px
	}

	.footer-description {
		text-align: left;
        width: 35ch;
        font-size: 90%;
	}

    .social-media img:hover {
        filter: brightness(0) invert(1);
    }
</style>
