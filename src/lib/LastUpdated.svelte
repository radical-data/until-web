<script lang="ts">
	import { _, locale } from "svelte-i18n";
	export let lastUpdatedTime: Date;
	function toISODateTimeString(date: Date): string {
		const isoDateTimeString = date.toISOString().slice(0, 16);
		return isoDateTimeString.replace('T', ' ');
	}

	function toTimeFormat(date: Date, locale: string | null | undefined): string {
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const amOrPm = hours >= 12 ? $_('utils.time_pm') : $_('utils.time_am');
		const hourFormat = hours % 12 || 12;
		const timeString = `${hourFormat}:${minutes.toString().padStart(2, '0')}${amOrPm}`;
		return timeString;
	}
</script>

<div class="container">
	<div class="text">
		<p>{$_('home.last_updated')}</p>
		<p>
			<time datetime={toISODateTimeString(lastUpdatedTime)}>{toTimeFormat(lastUpdatedTime, $locale)}</time>
		</p>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
		<circle cx="8.5" cy="8.5" r="8.5" fill="#53B96A" />
	</svg>
</div>

<style>
	.container {
		display: inline-flex;
		padding: 0.1875rem 1rem;
		align-items: center;
		gap: 0.5rem;
		border-radius: 999rem;
		border: 1px solid #c6c6c6;
	}
	p {
		margin: 0;
		text-align: center;
	}
	time {
		font-size: 0.9rem;
		color: #cccccc;
	}
	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 98%;
	}
</style>
