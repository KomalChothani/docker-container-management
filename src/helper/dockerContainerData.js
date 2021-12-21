import * as DockerStatusConstants from "../constants/dockerContainerStatus";

export const dockerContainerMockData = [
    {
        containerId: 'c1f2188556615c',
        image: 'redis',
        name: 'magical_rhodes',
        status: DockerStatusConstants.CREATED
    },
    {
        containerId: 'c1f2658556611c',
        image: 'redis_latest',
        name: 'magical_high',
        status: DockerStatusConstants.CREATED
    },
    {
        containerId: 'd85756f57265',
        image: 'busybox',
        name: 'high_albattani',
        status: DockerStatusConstants.STARTED
    },
    {
        containerId: 'eao9c3c82f63',
        image: 'registry_latest',
        name: 'i_am_nostalgish',
        status: DockerStatusConstants.RUNNING
    },
    {
        containerId: '106ea823fe4e',
        image: 'fedora_latest',
        name: 'determined_albattani',
        status: DockerStatusConstants.RUNNING
    },
    {
        containerId: 'b3e730ed5e5b',
        image: 'ubuntu_latest',
        name: 'grave_kowalevski',
        status: DockerStatusConstants.STOPPED
    },
    {
        containerId: 'f8ee228c9464',
        image: 'fedora_20',
        name: 'tender_torvalds',
        status: DockerStatusConstants.STOPPED
    },
    {
        containerId: 'f8ee2234e9464',
        image: 'fedora_2e',
        name: 'tenderlt_grave',
        status: DockerStatusConstants.STOPPED
    },
    {
        containerId: 'f8ee2675464',
        image: 'fedora_1e',
        name: 'tenderlt_high',
        status: DockerStatusConstants.DEAD
    },
];
